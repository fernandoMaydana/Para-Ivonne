// --- CONTENIDO DE RESPALDO LOCAL (Por si falla Supabase o no está configurado) ---
const FALLBACK_CONTENT = {
    1: {
        nombre_flor: 'Girasol',
        buenos_dias: '¡Buenos días, estrella! Hoy empezamos una semana mágica. Que este primer día esté lleno de luz, buena vibra y mucha energía para comerte el mundo. Eres increíble.',
        poema: 'Girasol que buscas la luz del día, enséñanos a mirar siempre hacia adelante, a encontrar el calor en cada esquina y a florecer sin importar la tormenta.',
        dato_curioso: 'Los girasoles jóvenes realizan un fenómeno llamado heliotropismo: siguen el movimiento del sol de este a oeste durante el día, y por la noche vuelven a mirar al este esperando el amanecer.',
        pregunta_dia: '¿Qué es lo primero que te hizo sonreír hoy o qué te da esa chispa de energía por las mañanas?',
        cancion_url: 'https://open.spotify.com/track/4a7N68qY0HjL1j5W7vC1tW' // Latin Mafia - Flores (Real Verificado)
    },
    2: {
        nombre_flor: 'Tulipán',
        buenos_dias: '¡Hola de nuevo! Segundo día y la rutina empieza a tomar fuerza. Recuerda que no necesitas hacerlo todo perfecto, solo dar lo mejor de ti paso a paso. ¡Tú puedes!',
        poema: 'Tulipanes que despiertan con la brisa fresca, elegantes y sencillos, nos recuerdan que la belleza no grita, se siente en silencio y crece a su propio ritmo.',
        dato_curioso: 'En el siglo XVII en los Países Bajos, los tulipanes eran tan valiosos que sus bulbos se vendían por más que el precio de una casa promedio, un fenómeno conocido como la "Tulipomanía".',
        pregunta_dia: 'Si pudieras teletransportarte ahora mismo a cualquier lugar del mundo para tomar un café/té, ¿dónde sería?',
        cancion_url: 'https://open.spotify.com/track/6Qc8s9k83zV2u2nZ9O4x4U' // Latin Mafia - Julieta (Real Verificado)
    },
    3: {
        nombre_flor: 'Orquídea',
        buenos_dias: '¡Mitad de semana! Ya recorrimos la mitad del camino. Tómate un momento para respirar profundo, admirar lo lejos que has llegado y disfrutar del misterio de este día.',
        poema: 'Orquídea misteriosa de pétalos infinitos, guardas secretos de tierras lejanas, nos enseñas que la paciencia esculpe las formas más extraordinarias del alma.',
        dato_curioso: 'Las orquídeas tienen una de las familias de plantas más grandes del planeta, con más de 25,000 especies documentadas, y sus semillas son tan diminutas que no tienen endospermo, necesitando hongos específicos para germinar.',
        pregunta_dia: '¿Cuál es un misterio o un dato curioso que te encante y que casi nadie sepa?',
        cancion_url: 'https://open.spotify.com/track/4j61qQ60rR1EaV6L7y5O8S' // Latin Mafia - Sal Rosa (Real Verificado)
    },
    4: {
        nombre_flor: 'Rosa',
        buenos_dias: '¡Casi viernes! Hoy toca un poquito de romance y apapacho para el alma. Espero que sientas todo el cariño y la admiración que hay detrás de este espacio. Eres luz.',
        poema: 'Rosa silvestre que perfumas el viento, con espinas que cuizan tu delicado andar, eres el recordatorio eterno de que amar y ser amado es el mayor arte.',
        dato_curioso: 'Las rosas son una de las flores más antiguas del mundo. Se han encontrado fósiles de rosas que datan de hace más de 35 millones de años, y su fragancia es ampliamente usada para reducir el estrés.',
        pregunta_dia: 'Si tuvieras que describir tu día perfecto con tres palabras, ¿cuáles elegirías?',
        cancion_url: 'https://open.spotify.com/track/4P4Lg7Ld5lQ47oW7X5lT0m' // Latin Mafia - Mala Buena Suerte (Real Verificado)
    },
    5: {
        nombre_flor: 'Petunia',
        buenos_dias: '¡Llegó el viernes! Cerramos la semana con broche de oro. Has demostrado resiliencia y fuerza todos estos días. Hoy toca celebrar cada pequeña victoria y descansar.',
        poema: 'Petunia valiente que decoras los balcones, resistes el calor y sonríes ante la tarde, eres el reflejo de la victoria dulce tras el esfuerzo constante.',
        dato_curioso: 'Las petunias pertenecen a la familia de las solanáceas, lo que significa que están cercanamente emparentadas con los tomates, las patatas y las berenjenas, a pesar de su aspecto tan floral y delicado.',
        pregunta_dia: '¿Qué plan o pequeña recompensa tienes pensado darte este fin de semana para celebrar tu esfuerzo?',
        cancion_url: 'https://open.spotify.com/track/3T6oYm0O2lO056m15822z6' // Latin Mafia & Humbe - Patadas de Ahogado (Real Verificado)
    }
};

// --- STORAGE WRAPPER SEGURO (Previene fallos de seguridad en navegadores locales) ---
const safeStorage = {
    getItem(key) {
        try {
            return localStorage.getItem(key);
        } catch (e) {
            console.warn("Storage bloqueado por el navegador:", e);
            return null;
        }
    },
    setItem(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (e) {
            console.warn("No se pudo guardar en el Storage:", e);
        }
    },
    removeItem(key) {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.warn("No se pudo borrar del Storage:", e);
        }
    }
};

// --- CONFIGURACIÓN DE CREDENCIALES (Supabase) ---
// Escribe aquí tus datos directamente para conectar Supabase sin usar el botón:
let SUPABASE_URL = "https://adkkahbqyglycbgntapw.supabase.co"; 
let SUPABASE_KEY = "sb_publishable_moB38BuMMlw7ZOTcg_Pr0g_t7nTXlnC";

let supabaseClient = null;
let activeDay = 1;
let currentData = null;

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    inicializarClavesSupabase();
    detectarDiaActual();
    configurarSelectorDias();
    crearPetalosLluvia();
    cargarContenidoDia();
    configurarEventos();
});

// Cargar URL y API Key de LocalStorage o variables
function inicializarClavesSupabase() {
    // Solo buscar en Storage si NO están configuradas directamente en el código
    if (!SUPABASE_URL || !SUPABASE_KEY) {
        const savedUrl = safeStorage.getItem('supabase_url');
        const savedKey = safeStorage.getItem('supabase_key');
        
        if (savedUrl && savedKey) {
            SUPABASE_URL = savedUrl;
            SUPABASE_KEY = savedKey;
        }
    }

    // Limpiar la URL si trae "/rest/v1/" al final
    if (SUPABASE_URL) {
        SUPABASE_URL = SUPABASE_URL.trim().replace(/\/rest\/v1\/?$/, "");
    }
    if (SUPABASE_KEY) {
        SUPABASE_KEY = SUPABASE_KEY.trim();
    }

    if (SUPABASE_URL && SUPABASE_KEY) {
        try {
            if (window.supabase) {
                // Inicializar cliente de Supabase
                supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
                console.log("Supabase inicializado correctamente.");
                // Ocultar botón si conectó bien
                const btn = document.getElementById('setup-trigger-btn');
                if (btn) btn.style.display = 'none';
            } else {
                console.error("El script de Supabase no cargó correctamente (verifica tu conexión a internet).");
            }
        } catch (e) {
            console.error("Error al inicializar Supabase:", e);
        }
    } else {
        console.warn("Faltan las credenciales de Supabase. La app funcionará en modo Local/Offline.");
    }
}

// Detectar qué día cargar (?dia=X en URL solo en modo dev, o día de la semana automático)
function detectarDiaActual() {
    const urlParams = new URLSearchParams(window.location.search);
    const isDev = urlParams.get('dev') === 'true';
    const diaParam = parseInt(urlParams.get('dia'));

    if (isDev && diaParam >= 1 && diaParam <= 5) {
        // En modo desarrollo, permitimos forzar el día por parámetro de URL (?dia=X)
        activeDay = diaParam;
    } else {
        // En producción (para ella), se calcula según el día de la semana (Jueves a Domingo)
        let dayOfWeek = new Date().getDay(); // 0 = Domingo, 1 = Lunes, 2 = Martes, etc.
        if (dayOfWeek === 4) {
            activeDay = 1; // Jueves = Día 1 (Girasol)
        } else if (dayOfWeek === 5) {
            activeDay = 2; // Viernes = Día 2 (Tulipán)
        } else if (dayOfWeek === 6) {
            activeDay = 3; // Sábado = Día 3 (Orquídea)
        } else if (dayOfWeek === 0) {
            activeDay = 4; // Domingo = Día 4 (Rosa)
        } else {
            activeDay = 1; // Lunes/Martes/Miércoles fallback al Día 1
        }
    }

    // Aplicar clase del tema en el body
    document.body.className = '';
    const florNombre = FALLBACK_CONTENT[activeDay].nombre_flor.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Quitar acentos
    document.body.classList.add(`theme-${florNombre}`);

    // Actualizar indicador del día
    document.querySelectorAll('.day-number-label').forEach(el => {
        el.textContent = activeDay;
    });
}

// Configurar enlaces de la barra inferior (Solo visible en modo dev)
function configurarSelectorDias() {
    const urlParams = new URLSearchParams(window.location.search);
    const isDev = urlParams.get('dev') === 'true';
    const selector = document.getElementById('days-selector');
    if (!selector) return;

    if (!isDev) {
        // Ocultar barra completamente en producción para ella
        selector.style.display = 'none';
        return;
    }

    // Si es modo desarrollo, mostrar barra y renderizar botones
    selector.style.display = 'flex';
    selector.innerHTML = '';
    
    for (let i = 1; i <= 5; i++) {
        const link = document.createElement('a');
        link.href = `?dia=${i}&dev=true`;
        link.textContent = i;
        link.className = 'day-badge';
        if (i === activeDay) {
            link.classList.add('active');
        }
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.history.pushState({}, '', `?dia=${i}&dev=true`);
            detectarDiaActual();
            configurarSelectorDias();
            cargarContenidoDia();
        });
        selector.appendChild(link);
    }
}

// Lluvia orgánica de pétalos
function crearPetalosLluvia() {
    const container = document.getElementById('petals-container');
    if (!container) return;

    container.innerHTML = '';
    const cantidadPetalos = window.innerWidth < 480 ? 15 : 30;

    for (let i = 0; i < cantidadPetalos; i++) {
        spawnPetal(container);
    }
}

function spawnPetal(container) {
    const petal = document.createElement('div');
    petal.className = 'petal';

    const size = Math.random() * 15 + 8; // Tamaño entre 8px y 23px
    petal.style.width = `${size}px`;
    petal.style.height = `${size * 0.9}px`;

    petal.style.left = `${Math.random() * 100}%`;
    petal.style.top = `${-10 - Math.random() * 20}%`;

    const duration = Math.random() * 10 + 10; // Duración entre 10s y 20s
    const delay = Math.random() * -20; // Start delay negativo para evitar caída grupal al inicio
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `${delay}s`;

    // Rotación inicial y forma de pétalo orgánico
    petal.style.transform = `rotate(${Math.random() * 360}deg)`;

    container.appendChild(petal);

    // Reciclar el pétalo al finalizar su animación para infinito flujo
    petal.addEventListener('animationiteration', () => {
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.animationDuration = `${Math.random() * 10 + 10}s`;
    });
}

// Cargar los datos desde Supabase con fallback local
async function cargarContenidoDia() {
    let data = null;

    // 1. Intentar obtener datos de Supabase si está inicializado
    if (supabaseClient) {
        try {
            const { data: dbData, error } = await supabaseClient
                .from('semana_flores')
                .select('*')
                .eq('id', activeDay)
                .single();

            if (!error && dbData) {
                data = dbData;
                console.log(`Datos del Día ${activeDay} cargados desde Supabase.`);
            } else {
                console.warn("Error en consulta a Supabase, cargando datos locales:", error);
            }
        } catch (e) {
            console.error("Fallo de red o consulta a Supabase:", e);
        }
    }

    // 2. Si falló o no hay Supabase, usar el fallback
    if (!data) {
        data = FALLBACK_CONTENT[activeDay];
        console.log(`Datos del Día ${activeDay} cargados desde el Respaldo Local (JS).`);
    }

    currentData = data;
    actualizarVistaDOM(data);
}
function actualizarVistaDOM(data) {
    // 1. Nombres y flores en las cabeceras
    document.querySelectorAll('.flower-name-placeholder').forEach(el => {
        el.textContent = data.nombre_flor;
    });

    // 2. Buenos días
    const buenosDiasEl = document.getElementById('buenos-dias-text');
    if (buenosDiasEl) buenosDiasEl.textContent = data.buenos_dias;

    // 3. Poema / Inspiración
    const poemaEl = document.getElementById('poema-text');
    if (poemaEl) poemaEl.textContent = data.poema;

    // 4. Inyectar reproductor de música de Latin Mafia
    renderizarReproductorMusica(data.cancion_url);

    // 5. Enrutar según la fase inicial de carga
    document.querySelectorAll('.step').forEach(step => step.classList.remove('active'));

    const urlParams = new URLSearchParams(window.location.search);
    const isDev = urlParams.get('dev') === 'true';
    const diaVisto = safeStorage.getItem("dia_" + activeDay + "_visto");

    if (diaVisto === "true" && !isDev) {
        // Si ya lo vio hoy y NO es modo dev, directo al menú estático
        document.getElementById('step-menu').classList.add('active');
    } else {
        // Primera vez que entra hoy (o modo dev)
        if (activeDay === 1) {
            // El Día 1 inicia con el Manifiesto (Fase 1)
            document.getElementById('step-manifesto').classList.add('active');
        } else {
            // Los demás días inician directo en el Buenos Días (Fase 2)
            document.getElementById('step-story').classList.add('active');
            reiniciarAnimacionFlor();
        }
    }
}

// Convertir links de Spotify/YouTube/Direct-Audio a reproductor ideal
function renderizarReproductorMusica(url) {
    const container = document.getElementById('music-player-container');
    if (!container) return;

    let embedUrl = "";
    let isYoutube = false;
    let isDirectAudio = false;

    // 1. Validar si es un archivo de audio directo (.mp3, .wav, etc.)
    if (url.toLowerCase().endsWith('.mp3') || url.toLowerCase().includes('.mp3?') || 
        url.toLowerCase().endsWith('.wav') || url.toLowerCase().includes('.wav?')) {
        isDirectAudio = true;
    }
    // 2. Validar si es Spotify
    else if (url.includes('spotify.com')) {
        const trackMatch = url.match(/spotify\.com\/track\/([a-zA-Z0-9]+)/);
        const playlistMatch = url.match(/spotify\.com\/playlist\/([a-zA-Z0-9]+)/);
        
        if (trackMatch) {
            embedUrl = `https://open.spotify.com/embed/track/${trackMatch[1]}?utm_source=generator`;
        } else if (playlistMatch) {
            embedUrl = `https://open.spotify.com/embed/playlist/${playlistMatch[1]}?utm_source=generator`;
        }
    } 
    // 3. Validar si es YouTube
    else if (url.includes('youtube.com') || url.includes('youtu.be')) {
        const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/);
        if (ytMatch) {
            embedUrl = `https://www.youtube.com/embed/${ytMatch[1]}`;
            isYoutube = true;
        }
    }

    if (isDirectAudio) {
        container.innerHTML = `
            <div class="music-container audio-mode">
                <audio controls style="width: 100%; outline: none; border-radius: 12px;">
                    <source src="${url}" type="audio/mpeg">
                    Tu navegador no soporta este reproductor de audio.
                </audio>
            </div>
        `;
    } else if (embedUrl) {
        container.innerHTML = `
            <div class="music-container ${isYoutube ? 'youtube-mode' : 'spotify-mode'}">
                <iframe src="${embedUrl}" 
                        allowfullscreen="" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy">
                </iframe>
            </div>
        `;
    } else {
        container.innerHTML = `
            <a href="${url}" target="_blank" class="btn btn-secondary btn-small">
                🎵 Escuchar canción externa
            </a>
        `;
    }
}

// Configurar los botones de eventos
function configurarEventos() {
    // --- NAVEGACIÓN DE FASES (Páginas con transiciones de tarjeta) ---
    
    // 1. Manifiesto (Fase 1) -> Buenos Días (Fase 2)
    const btnToStory = document.getElementById('btn-to-story');
    if (btnToStory) {
        btnToStory.addEventListener('click', () => {
            cambiarPaso('step-manifesto', 'step-story', () => {
                reiniciarAnimacionFlor();
            });
        });
    }

    // 2. Buenos Días (Fase 2) -> Poema (Fase 3)
    const btnToPoem = document.getElementById('btn-to-poem');
    if (btnToPoem) {
        btnToPoem.addEventListener('click', () => {
            cambiarPaso('step-story', 'step-poem');
        });
    }

    // 3. Poema (Fase 3) -> Menú principal (Fase 4) e indicar que el día ya fue visto
    const btnToMenu = document.getElementById('btn-to-menu');
    if (btnToMenu) {
        btnToMenu.addEventListener('click', () => {
            cambiarPaso('step-poem', 'step-menu', () => {
                // Guardar en el navegador que el día de hoy ya fue visto
                safeStorage.setItem("dia_" + activeDay + "_visto", "true");
            });
        });
    }

    // 4. Volver a leer (Fase 4 -> Fase 2)
    const btnBackToStory = document.getElementById('btn-back-to-story');
    if (btnBackToStory) {
        btnBackToStory.addEventListener('click', () => {
            cambiarPaso('step-menu', 'step-story', () => {
                reiniciarAnimacionFlor();
            });
        });
    }

    // --- BOTONES DE INTERACCIONES ---

    // 1. Botón de Pregunta del Día (Abre modal con formulario)
    const btnPregunta = document.getElementById('btn-pregunta');
    if (btnPregunta) {
        btnPregunta.addEventListener('click', () => {
            abrirModal('❓ Pregunta del Día', `
                <p style="font-weight: 700; margin-bottom: 15px; line-height:1.5;">${currentData.pregunta_dia}</p>
                <form id="modal-question-form">
                    <textarea id="modal-respuesta-input" class="textarea-premium" placeholder="Escribe aquí tu respuesta bonita..." required></textarea>
                    <button type="submit" class="btn">
                        Enviar Respuesta
                    </button>
                    <div id="modal-form-feedback" class="form-feedback"></div>
                </form>
            `);

            // Capturar envío de formulario dentro del modal
            const formPregunta = document.getElementById('modal-question-form');
            if (formPregunta) {
                formPregunta.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    const textarea = document.getElementById('modal-respuesta-input');
                    const feedback = document.getElementById('modal-form-feedback');
                    const btnEnviar = formPregunta.querySelector('button[type="submit"]');
                    
                    const respuestaTexto = textarea.value.trim();
                    if (!respuestaTexto) return;

                    textarea.disabled = true;
                    btnEnviar.disabled = true;
                    btnEnviar.textContent = "Enviando...";

                    try {
                        if (supabaseClient) {
                            const { error } = await supabaseClient
                                .from('respuestas_amiga')
                                .insert([
                                    { dia_id: activeDay, respuesta: respuestaTexto }
                                ]);

                            if (error) throw error;
                        } else {
                            guardarRespuestaLocal(activeDay, respuestaTexto);
                            console.log("Guardado local realizado con éxito.");
                        }

                        feedback.className = 'form-feedback success';
                        feedback.innerHTML = '✨ ¡Tu respuesta ha sido guardada en Supabase! ✨';
                        textarea.value = '';
                        // Cerrar modal automáticamente tras 2 segundos
                        setTimeout(cerrarModal, 2000);
                    } catch (error) {
                        console.error("Error al guardar la respuesta:", error);
                        feedback.className = 'form-feedback error';
                        feedback.innerHTML = '❌ Error al enviar. Revisa la consola o llaves de Supabase.';
                        textarea.disabled = false;
                        btnEnviar.disabled = false;
                        btnEnviar.textContent = "Enviar Respuesta";
                    }
                });
            }
        });
    }

    // 2. Botón de Emergencia (Abre modal de apapacho)
    const btnEmergencia = document.getElementById('btn-emergencia');
    if (btnEmergencia) {
        btnEmergencia.addEventListener('click', () => {
            abrirModal('🚨 Botón de Emergencia', `
                <div style="text-align: left; line-height: 1.6;">
                    <p style="margin-bottom: 15px; font-size: 1.05rem;"><strong>¡Apapacho de Emergencia Activado!</strong> ❤️</p>
                    <p style="margin-bottom: 12px;">Si las cosas van cuesta arriba hoy, o si te sientes aburrida, cansada o estresada, recuerda esto:</p>
                    <ul style="margin-left: 20px; margin-bottom: 15px; display: flex; flex-direction: column; gap: 8px;">
                        <li>🌟 Eres una persona increíblemente fuerte, brillante y capaz.</li>
                        <li>⛈️ Las tormentas siempre son temporales; después siempre sale el sol.</li>
                        <li>💭 Tienes a alguien al otro lado enviándote la mejor energía y pensando en ti.</li>
                    </ul>
                    <p>Tómate un respiro, bebe un sorbo de agua, sonríe y sigue adelante. ¡Tú puedes con todo! 💪✨</p>
                </div>
            `);
        });
    }

    // 3. Botón de Dato Curioso (Abre modal de dato curioso)
    const btnDatoCurioso = document.getElementById('btn-dato-curioso');
    if (btnDatoCurioso) {
        btnDatoCurioso.addEventListener('click', () => {
            abrirModal(`💡 Dato Curioso: ${currentData.nombre_flor}`, `
                <p style="font-size: 1.05rem; line-height: 1.6; text-align: left;">
                    ${currentData.dato_curioso}
                </p>
            `);
        });
    }

    // Cerrar modal
    const modalClose = document.getElementById('modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', cerrarModal);
    }
    const modalOverlay = document.getElementById('modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) cerrarModal();
        });
    }

    // --- PANEL DE CONFIGURACIÓN MANUAL ---
    const btnTriggerSetup = document.getElementById('setup-trigger-btn');
    if (btnTriggerSetup) {
        btnTriggerSetup.addEventListener('click', () => {
            const currentUrl = safeStorage.getItem('supabase_url') || '';
            const currentKey = safeStorage.getItem('supabase_key') || '';
            
            abrirModal('Configuración de Supabase', `
                <div class="setup-panel active">
                    <p style="font-size: 0.9rem; margin-bottom: 10px;">Pega aquí tus credenciales de Supabase para almacenar las respuestas reales:</p>
                    <label style="font-size:0.8rem; font-weight:700;">Project URL:</label>
                    <input type="text" id="setup-url" class="input-premium" value="${currentUrl}" placeholder="https://xxxx.supabase.co">
                    
                    <label style="font-size:0.8rem; font-weight:700;">Anon / Public Key:</label>
                    <input type="password" id="setup-key" class="input-premium" value="${currentKey}" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...">
                    
                    <button id="btn-save-setup" class="btn btn-small" style="margin-top: 10px;">Guardar y Conectar</button>
                    <button id="btn-clear-setup" class="btn btn-secondary btn-small" style="margin-top: 5px;">Limpiar credenciales</button>
                </div>
            `);

            // Evento guardar credenciales
            document.getElementById('btn-save-setup').addEventListener('click', () => {
                const urlInput = document.getElementById('setup-url').value.trim();
                const keyInput = document.getElementById('setup-key').value.trim();

                if (urlInput && keyInput) {
                    safeStorage.setItem('supabase_url', urlInput);
                    safeStorage.setItem('supabase_key', keyInput);
                    cerrarModal();
                    window.location.reload();
                }
            });

            // Evento limpiar credenciales
            document.getElementById('btn-clear-setup').addEventListener('click', () => {
                safeStorage.removeItem('supabase_url');
                safeStorage.removeItem('supabase_key');
                cerrarModal();
                window.location.reload();
            });
        });
    }
}

// Simular base de datos local
function guardarRespuestaLocal(dia, respuesta) {
    let respuestasLocales = JSON.parse(safeStorage.getItem('respuestas_amiga_local')) || [];
    respuestasLocales.push({
        id: Date.now(),
        dia_id: dia,
        created_at: new Date().toISOString(),
        respuesta: respuesta
    });
    safeStorage.setItem('respuestas_amiga_local', JSON.stringify(respuestasLocales));
}

// Navegación fluida entre pantallas con animación de tarjeta
function cambiarPaso(pasoIdOcultar, pasoIdMostrar, callback) {
    const ocultar = document.getElementById(pasoIdOcultar);
    const mostrar = document.getElementById(pasoIdMostrar);
    
    if (!ocultar || !mostrar) return;

    // Añadir clase de salida para reproducir la animación
    ocultar.classList.add('exit');
    
    // Esperar a que termine la animación de salida (380ms en CSS)
    setTimeout(() => {
        ocultar.classList.remove('active', 'exit');
        mostrar.classList.add('active');
        if (callback) callback();
    }, 380);
}

// Reiniciar los tiempos del SVG para que se note la animación cuando entra la pantalla
function reiniciarAnimacionFlor() {
    const stem = document.querySelector('.flower-stem');
    const center = document.querySelector('.flower-center');
    const petals = document.querySelectorAll('.flower-petal');
    const leaves = document.querySelectorAll('.flower-leaf');

    if (stem) {
        stem.style.animation = 'none';
        stem.offsetHeight; // Forzar reflow
        stem.style.animation = 'drawStem 2.2s ease forwards';
    }

    if (center) {
        center.style.animation = 'none';
        center.offsetHeight;
        center.style.animation = 'growFlowerCenter 1.5s 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
    }

    leaves.forEach(leaf => {
        leaf.style.animation = 'none';
        leaf.offsetHeight;
        leaf.style.animation = 'growLeaf 1s 1s ease forwards';
    });

    petals.forEach(petal => {
        petal.style.animation = 'none';
        petal.offsetHeight;
        petal.style.animation = 'growPetal 1.8s 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
    });
}

// Modales genéricos
function abrirModal(titulo, htmlContenido) {
    const overlay = document.getElementById('modal-overlay');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');

    if (!overlay || !title || !body) return;

    title.textContent = titulo;
    body.innerHTML = htmlContenido;
    overlay.classList.add('active');
}

function cerrarModal() {
    const overlay = document.getElementById('modal-overlay');
    if (overlay) overlay.classList.remove('active');
}
