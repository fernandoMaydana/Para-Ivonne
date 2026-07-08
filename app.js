// --- CONTENIDO DE RESPALDO LOCAL (Vacío y Neutro por Defecto) ---
const FALLBACK_CONTENT = {
    0: {
        nombre_sala: 'Estudio del Curador',
        exposicion: 'Sala en Mantenimiento 🛠️',
        curador: 'Curador',
        horario: 'Lunes Cerrado',
        ficha_corta: 'La sala de mantenimiento está cerrada hoy.',
        reglas_humor: 'Prohibido el ingreso con estrés acumulado, Permitido comer chocolates virtuales',
        cancion_url: '',
        cancion_desc: 'Una melodía suave para iniciar la semana.',
        cancion_caratula: '',
        titulo_cuadro: 'Lienzo en Blanco',
        artista_cuadro: 'Colección Ivonne',
        cuadro_desc: 'Una representación artística de la tranquilidad y el reinicio.',
        prompt_ia: 'blueprint architectural plan of a classic museum building layout, grid lines, aesthetic clean blue color scheme, technical drawing style',
        curiosidad_cuadro: 'El lienzo en blanco simboliza las infinitas posibilidades que trae el inicio de cada nueva semana.',
        poema: 'El arte no es lo que ves, sino lo que haces sentir a otros.',
        autor_poema: 'Edgar Degas',
        tecnica_pintura: 'Esquema técnico y plano arquitectónico digital.',
        pregunta_trivia: '¿Cómo te sientes el día de hoy?',
        prompt_base_ia: 'an abstract oil painting on canvas representing: [EMOTION], museum masterpiece'
    },
    1: {
        nombre_sala: 'Sala 1',
        exposicion: 'Exposición por Definir',
        curador: 'Curador',
        horario: 'Por definir',
        ficha_corta: 'Ficha técnica de la sala. Escribe una descripción aquí.',
        reglas_humor: 'Prohibido pensar en el trabajo, Permitido suspirar de alegría',
        cancion_url: '',
        cancion_desc: 'Tema musical del día.',
        cancion_caratula: '',
        titulo_cuadro: 'Obra por Definir',
        artista_cuadro: 'Colección Ivonne',
        cuadro_desc: 'Una hermosa obra para contemplar en silencio.',
        prompt_ia: 'a blank golden picture frame on a dark museum wall, oil painting',
        curiosidad_cuadro: '¿Sabías que las pinturas en marcos de madera oscura realzan los contrastes de las tonalidades cálidas?',
        poema: 'La belleza salvará al mundo si aprendemos a contemplarla en silencio.',
        autor_poema: 'Fiódor Dostoyevski',
        tecnica_pintura: 'Pintura al óleo clásica con texturas al temple.',
        pregunta_trivia: '¿Cómo te sientes el día de hoy?',
        prompt_base_ia: 'an abstract oil painting on canvas representing: [EMOTION], museum masterpiece'
    },
    2: {
        nombre_sala: 'Sala 2',
        exposicion: 'Exposición por Definir',
        curador: 'Curador',
        horario: 'Por definir',
        ficha_corta: 'Ficha técnica de la sala. Escribe una descripción aquí.',
        reglas_humor: 'Prohibido el aburrimiento, Obligatorio sonreír',
        cancion_url: '',
        cancion_desc: 'Tema musical del día.',
        cancion_caratula: '',
        titulo_cuadro: 'Obra por Definir',
        artista_cuadro: 'Colección Ivonne',
        cuadro_desc: 'Una hermosa obra para contemplar en silencio.',
        prompt_ia: 'a blank golden picture frame on a dark museum wall, oil painting',
        curiosidad_cuadro: 'Esta composición busca capturar las vibraciones poéticas de los pequeños momentos cotidianos.',
        poema: 'Para viajar lejos, no hay mejor nave que un libro o una obra de arte.',
        autor_poema: 'Emily Dickinson',
        tecnica_pintura: 'Acuarela diluida con trazos suaves a lápiz.',
        pregunta_trivia: '¿Cómo te sientes el día de hoy?',
        prompt_base_ia: 'an abstract oil painting on canvas representing: [EMOTION], museum masterpiece'
    },
    3: {
        nombre_sala: 'Sala 3',
        exposicion: 'Exposición por Definir',
        curador: 'Curador',
        horario: 'Por definir',
        ficha_corta: 'Ficha técnica de la sala. Escribe una descripción aquí.',
        reglas_humor: 'Prohibido el aburrimiento, Obligatorio sonreír',
        cancion_url: '',
        cancion_desc: 'Tema musical del día.',
        cancion_caratula: '',
        titulo_cuadro: 'Obra por Definir',
        artista_cuadro: 'Colección Ivonne',
        cuadro_desc: 'Una hermosa obra para contemplar en silencio.',
        prompt_ia: 'a blank golden picture frame on a dark museum wall, oil painting',
        curiosidad_cuadro: 'Los tonos ocres y dorados evocan la calidez de las tardes de contemplación en la naturaleza.',
        poema: 'El amor es una copa que debe sostenerse con ambas manos y beberse con los ojos cerrados.',
        autor_poema: 'Kahlil Gibran',
        tecnica_pintura: 'Espátula de acrílico pesado sobre lienzo texturizado.',
        pregunta_trivia: '¿Cómo te sientes el día de hoy?',
        prompt_base_ia: 'an abstract oil painting on canvas representing: [EMOTION], museum masterpiece'
    },
    4: {
        nombre_sala: 'Sala 4',
        exposicion: 'Exposición por Definir',
        curador: 'Curador',
        horario: 'Por definir',
        ficha_corta: 'Ficha técnica de la sala. Escribe una descripción aquí.',
        reglas_humor: 'Prohibido el aburrimiento, Obligatorio sonreír',
        cancion_url: '',
        cancion_desc: 'Tema musical del día.',
        cancion_caratula: '',
        titulo_cuadro: 'Obra por Definir',
        artista_cuadro: 'Colección Ivonne',
        cuadro_desc: 'Una hermosa obra para contemplar en silencio.',
        prompt_ia: 'a blank golden picture frame on a dark museum wall, oil painting',
        curiosidad_cuadro: 'Esta pieza resalta la importancia de la inocencia y el juego en los procesos creativos.',
        poema: 'En el corazón de cada niño reside el verdadero artista que todos intentamos rescatar.',
        autor_poema: 'Pablo Picasso',
        tecnica_pintura: 'Estilo naíf con colores puros y trazos sencillos.',
        pregunta_trivia: '¿Cómo te sientes el día de hoy?',
        prompt_base_ia: 'an abstract oil painting on canvas representing: [EMOTION], museum masterpiece'
    },
    5: {
        nombre_sala: 'Sala 5',
        exposicion: 'Exposición por Definir',
        curador: 'Curador',
        horario: 'Por definir',
        ficha_corta: 'Ficha técnica de la sala. Escribe una descripción aquí.',
        reglas_humor: 'Prohibido el aburrimiento, Obligatorio sonreír',
        cancion_url: '',
        cancion_desc: 'Tema musical del día.',
        cancion_caratula: '',
        titulo_cuadro: 'Obra por Definir',
        artista_cuadro: 'Colección Ivonne',
        cuadro_desc: 'Una hermosa obra para contemplar en silencio.',
        prompt_ia: 'a blank golden picture frame on a dark museum wall, oil painting',
        curiosidad_cuadro: 'Las obras de arte pop capturan la ironía del consumismo y la belleza de los íconos de la cultura popular.',
        poema: 'El arte pop es para todos; es el arte que celebra los objetos comunes y los eleva al altar de los museos.',
        autor_poema: 'Andy Warhol',
        tecnica_pintura: 'Serigrafía en colores complementarios de alto contraste.',
        pregunta_trivia: '¿Cómo te sientes el día de hoy?',
        prompt_base_ia: 'an abstract oil painting on canvas representing: [EMOTION], museum masterpiece'
    },
    6: {
        nombre_sala: 'Sala 6',
        exposicion: 'Exposición por Definir',
        curador: 'Curador',
        horario: 'Por definir',
        ficha_corta: 'Ficha técnica de la sala. Escribe una descripción aquí.',
        reglas_humor: 'Prohibido el aburrimiento, Obligatorio sonreír',
        cancion_url: '',
        cancion_desc: 'Tema musical del día.',
        cancion_caratula: '',
        titulo_cuadro: 'Obra por Definir',
        artista_cuadro: 'Colección Ivonne',
        cuadro_desc: 'Una hermosa obra para contemplar en silencio.',
        prompt_ia: 'a blank golden picture frame on a dark museum wall, oil painting',
        curiosidad_cuadro: 'El descanso no es pereza; es el suelo fértil donde germinan las nuevas visiones de la mente.',
        poema: 'Se necesita mucho tiempo para no hacer nada, y ese tiempo es el más valioso de todos.',
        autor_poema: 'Oscar Wilde',
        tecnica_pintura: 'Impresionismo tardío con pinceladas sueltas cargadas de luz.',
        pregunta_trivia: '¿Cómo te sientes el día de hoy?',
        prompt_base_ia: 'an abstract oil painting on canvas representing: [EMOTION], museum masterpiece'
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

let ADMIN_PASSWORD = "museo";
let isAdmin = sessionStorage.getItem('is_museum_admin') === 'true';

function solicitarPasswordAdmin() {
    if (isAdmin) {
        alert("Ya estás en Modo Curador/Admin 🏛️");
        return;
    }

    const pass = prompt("Por favor, ingresa la clave de Curador para acceder:");
    if (pass === ADMIN_PASSWORD) {
        isAdmin = true;
        sessionStorage.setItem('is_museum_admin', 'true');
        alert("¡Acceso concedido! Modo Curador activado. 🏛️");
        
        // Activar visibilidad del CMS
        const btnCMS = document.getElementById('setup-trigger-btn');
        if (btnCMS) btnCMS.style.display = 'block';
        
        // Renderizar el boleto nuevamente para reflejar el estado desbloqueado
        renderizarBoleto();
    } else if (pass !== null) {
        alert("❌ Contraseña incorrecta.");
    }
}

function actualizarDots(idx) {
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot, i) => {
        if (i === idx) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// --- NUEVAS FUNCIONES AUXILIARES: BOLETO Y MODALES ---

function obtenerDiaDeHoyIndex() {
    let dayOfWeek = new Date().getDay(); // 0 = Domingo, 1 = Lunes, 2 = Martes, ...
    if (dayOfWeek === 1) return 0; // Lunes
    if (dayOfWeek === 2) return 1; // Martes
    if (dayOfWeek === 3) return 2; // Miércoles
    if (dayOfWeek === 4) return 3; // Jueves
    if (dayOfWeek === 5) return 4; // Viernes
    if (dayOfWeek === 6) return 5; // Sábado
    if (dayOfWeek === 0) return 6; // Domingo
    return 0;
}

function renderizarBoleto() {
    const grid = document.getElementById('ticket-days-grid');
    if (!grid) return;

    grid.innerHTML = '';
    const dayNames = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const todayIndex = obtenerDiaDeHoyIndex();

    const urlParams = new URLSearchParams(window.location.search);
    const isDev = urlParams.get('dev') === 'true';

    for (let i = 0; i <= 6; i++) {
        const card = document.createElement('div');
        card.className = 'ticket-day-card';
        
        let statusText = '';
        let isLocked = i > todayIndex && !isDev && !isAdmin;
        let isToday = i === todayIndex;
        let isVisited = i < todayIndex || isDev || isAdmin;

        // Comprobar si ya fue perforado hoy en local storage
        const yaPerforado = safeStorage.getItem(`ticket_punched_day_${i}`) === 'true';

        if (isLocked) {
            card.classList.add('locked');
            statusText = '🔒 Cerrado';
        } else if (isToday) {
            card.classList.add('today');
            statusText = yaPerforado ? '✓ Perforado' : '🎟️ Marcar';
            if (yaPerforado) {
                card.classList.add('visited');
            }
        } else {
            card.classList.add('visited');
            statusText = '✓ Ver';
        }

        card.innerHTML = `
            <div class="ticket-day-info">
                <div class="ticket-day-num">SALA 0${i === 0 ? 'M' : i}</div>
                <div class="ticket-day-name">${dayNames[i]}</div>
            </div>
            <div class="ticket-day-status">
                <span>${statusText}</span>
                <div class="ticket-punch-hole"></div>
            </div>
        `;

        if (!isLocked) {
            card.addEventListener('click', () => {
                // Si es hoy y no está perforado, hacer animación de perforado
                if (isToday && !yaPerforado) {
                    safeStorage.setItem(`ticket_punched_day_${i}`, 'true');
                    card.classList.add('visited');
                    const statusSpan = card.querySelector('.ticket-day-status span');
                    if (statusSpan) statusSpan.textContent = '✓ Perforado';
                    
                    // Pequeño retardo para simular la perforación
                    setTimeout(() => {
                        abrirSalaDia(i);
                    }, 450);
                } else {
                    abrirSalaDia(i);
                }
            });
        }

        grid.appendChild(card);
    }
}

function abrirSalaDia(diaIndex) {
    activeDay = diaIndex;
    aplicarTemaDia(diaIndex);
    
    // Reiniciar popup de técnica artística
    window.techniqueClosedThisSession = false;
    const techniqueOverlay = document.getElementById('technique-popup-overlay');
    if (techniqueOverlay) {
        techniqueOverlay.style.display = 'none';
    }
    
    // Mostrar la sala de inmediato para máxima rapidez
    const receptionBtn = document.getElementById('reception-btn');
    if (receptionBtn) receptionBtn.style.display = 'block';
    
    // Resetear el scroll del carrusel al primer elemento
    const slider = document.getElementById('museum-slider');
    if (slider) {
        slider.scrollLeft = 0;
    }
    actualizarDots(0);
    
    cambiarPaso('step-ticket', 'step-story', () => {
        reiniciarAnimacionFlor();
    });

    // Cargar contenido de Supabase/local en segundo plano
    cargarContenidoDia();
}

function aplicarTemaDia(diaId) {
    document.body.className = '';
    let themeClass = 'cerrado';
    if (diaId === 1) themeClass = 'comida';
    else if (diaId === 2) themeClass = 'viaje';
    else if (diaId === 3) themeClass = 'chocolate';
    else if (diaId === 4) themeClass = 'inocencia';
    else if (diaId === 5) themeClass = 'pop';
    else if (diaId === 6) themeClass = 'descanso';
    
    document.body.classList.add(`theme-${themeClass}`);

    // Actualizar indicador del día / sala
    document.querySelectorAll('.day-number-label').forEach(el => {
        el.textContent = diaId === 0 ? "M" : diaId;
    });
}



// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    inicializarClavesSupabase();
    detectarDiaActual();
    configurarSelectorDias();
    crearPetalosLluvia();
    
    // Cargar contenido inicial y luego enrutar
    cargarContenidoDia().then(() => {
        enrutarPasoInicial();
    });

    configurarEventos();

    // Ocultar o mostrar el botón del CMS según isAdmin al cargar
    const btnCMS = document.getElementById('setup-trigger-btn');
    if (btnCMS) {
        btnCMS.style.display = isAdmin ? 'block' : 'none';
    }

    // Comprobar si viene el parámetro ?admin=true o ?dev=true en la URL para abrir el prompt de clave
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === 'true' && !isAdmin) {
        setTimeout(solicitarPasswordAdmin, 500);
    }
});

// Enrutar al paso correspondiente según la URL inicial
function enrutarPasoInicial() {
    const urlParams = new URLSearchParams(window.location.search);
    const startsInRoom = urlParams.has('dia'); // Si tiene ?dia=X, abre directo la sala en modo dev
    const receptionBtn = document.getElementById('reception-btn');

    document.querySelectorAll('.step').forEach(step => step.classList.remove('active'));

    if (startsInRoom) {
        document.getElementById('step-story').classList.add('active');
        if (receptionBtn) receptionBtn.style.display = 'block';
        
        // Resetear scroll del carrusel al cargar directo en sala
        const slider = document.getElementById('museum-slider');
        if (slider) {
            slider.scrollLeft = 0;
        }
        actualizarDots(0);
        reiniciarAnimacionFlor();
    } else {
        document.getElementById('step-ticket').classList.add('active');
        if (receptionBtn) receptionBtn.style.display = 'none';
        renderizarBoleto();
    }
}

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

    if (isDev && !isNaN(diaParam) && diaParam >= 0 && diaParam <= 6) {
        // En modo desarrollo, permitimos forzar el día por parámetro de URL (?dia=0 a 6)
        activeDay = diaParam;
    } else {
        // En producción (para ella), se calcula según el día de la semana (Martes a Domingo + Lunes Cerrado)
        let dayOfWeek = new Date().getDay(); // 0 = Domingo, 1 = Lunes, 2 = Martes, etc.
        if (dayOfWeek === 1) {
            activeDay = 0; // Lunes = Cerrado (Mantenimiento)
        } else if (dayOfWeek === 2) {
            activeDay = 1; // Martes = Día 1 (Galería Gastronómica)
        } else if (dayOfWeek === 3) {
            activeDay = 2; // Miércoles = Día 2 (Pabellón del Escapismo)
        } else if (dayOfWeek === 4) {
            activeDay = 3; // Jueves = Día 3 (Salón del Cacao)
        } else if (dayOfWeek === 5) {
            activeDay = 4; // Viernes = Día 4 (Sala de la Inocencia)
        } else if (dayOfWeek === 6) {
            activeDay = 5; // Sábado = Día 5 (Patio de Arte Pop)
        } else if (dayOfWeek === 0) {
            activeDay = 6; // Domingo = Día 6 (Sala de Descanso Extendido)
        }
    }

    aplicarTemaDia(activeDay);
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

    const dayLabels = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

    for (let i = 0; i <= 6; i++) {
        const link = document.createElement('a');
        link.href = `?dia=${i}&dev=true`;
        link.textContent = dayLabels[i];
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
// Helper para deserializar las columnas combinadas de la BD
function deserializarDatosDia(dbData, diaId) {
    let res = Object.assign({}, FALLBACK_CONTENT[diaId]);

    if (!dbData) return res;

    // Esquema Nuevo semana_museo_v2
    if (dbData.nombre_sala !== undefined && dbData.nombre_sala !== null) res.nombre_sala = dbData.nombre_sala;
    if (dbData.exposicion !== undefined && dbData.exposicion !== null) res.exposicion = dbData.exposicion;
    if (dbData.curador !== undefined && dbData.curador !== null) res.curador = dbData.curador;
    if (dbData.horario !== undefined && dbData.horario !== null) res.horario = dbData.horario;
    if (dbData.ficha_corta !== undefined && dbData.ficha_corta !== null) res.ficha_corta = dbData.ficha_corta;
    if (dbData.reglas_humor !== undefined && dbData.reglas_humor !== null) res.reglas_humor = dbData.reglas_humor;
    
    if (dbData.cancion_url !== undefined && dbData.cancion_url !== null) res.cancion_url = dbData.cancion_url;
    if (dbData.cancion_desc !== undefined && dbData.cancion_desc !== null) res.cancion_desc = dbData.cancion_desc;
    
    if (dbData.titulo_cuadro !== undefined && dbData.titulo_cuadro !== null) res.titulo_cuadro = dbData.titulo_cuadro;
    if (dbData.artista_cuadro !== undefined && dbData.artista_cuadro !== null) res.artista_cuadro = dbData.artista_cuadro;
    if (dbData.cuadro_desc !== undefined && dbData.cuadro_desc !== null) res.cuadro_desc = dbData.cuadro_desc;
    if (dbData.prompt_ia !== undefined && dbData.prompt_ia !== null) res.prompt_ia = dbData.prompt_ia;
    
    if (dbData.pregunta_trivia !== undefined && dbData.pregunta_trivia !== null) res.pregunta_trivia = dbData.pregunta_trivia;
    if (dbData.prompt_base_ia !== undefined && dbData.prompt_base_ia !== null) res.prompt_base_ia = dbData.prompt_base_ia;

    // Nuevas Columnas v2 extendidas
    if (dbData.cancion_caratula !== undefined && dbData.cancion_caratula !== null) res.cancion_caratula = dbData.cancion_caratula;
    if (dbData.curiosidad_cuadro !== undefined && dbData.curiosidad_cuadro !== null) res.curiosidad_cuadro = dbData.curiosidad_cuadro;
    if (dbData.poema !== undefined && dbData.poema !== null) res.poema = dbData.poema;
    if (dbData.autor_poema !== undefined && dbData.autor_poema !== null) res.autor_poema = dbData.autor_poema;
    if (dbData.tecnica_pintura !== undefined && dbData.tecnica_pintura !== null) res.tecnica_pintura = dbData.tecnica_pintura;
    if (dbData.cancion_titulo !== undefined && dbData.cancion_titulo !== null) res.cancion_titulo = dbData.cancion_titulo;
    if (dbData.cancion_autor !== undefined && dbData.cancion_autor !== null) res.cancion_autor = dbData.cancion_autor;

    return res;
}

// Cargar los datos desde Supabase con fallback local
async function cargarContenidoDia() {
    let data = null;

    // 1. Intentar cargar desde el LocalStorage (los overrides del CMS)
    const localOverride = safeStorage.getItem("museum_day_" + activeDay + "_override");
    if (localOverride) {
        try {
            data = Object.assign({}, FALLBACK_CONTENT[activeDay], JSON.parse(localOverride));
            console.log(`Datos del Día ${activeDay} cargados desde el Override Local (CMS).`);
        } catch (e) {
            console.error("Error al parsear el override local:", e);
        }
    }

    // 2. Intentar obtener datos de Supabase si está inicializado y no hay override local
    if (!data && supabaseClient) {
        try {
            const { data: dbData, error } = await supabaseClient
                .from('semana_museo_v2')
                .select('*')
                .eq('id', activeDay)
                .single();

            if (!error && dbData) {
                data = deserializarDatosDia(dbData, activeDay);
                console.log(`Datos del Día ${activeDay} cargados desde Supabase.`);
            } else {
                console.warn("Error en consulta a Supabase, cargando datos locales:", error);
            }
        } catch (e) {
            console.error("Fallo de red o consulta a Supabase:", e);
        }
    }

    // 3. Si falló o no hay Supabase/override, usar el fallback por defecto
    if (!data) {
        data = FALLBACK_CONTENT[activeDay];
        console.log(`Datos del Día ${activeDay} cargados desde el Respaldo Local (JS).`);
    }

    currentData = data;
    
    // Cargar respuestas/valoraciones anteriores de Ivonne (ratings y pinturas)
    window.currentUserRatings = { song: 0, art: 0, emotionImage: '', emotionText: '' };
    
    // Fallback inicial a LocalStorage
    try {
        const lSong = safeStorage.getItem(`museum_day_${activeDay}_rating_song`);
        if (lSong) window.currentUserRatings.song = parseInt(lSong);
        const lArt = safeStorage.getItem(`museum_day_${activeDay}_rating_art`);
        if (lArt) window.currentUserRatings.art = parseInt(lArt);
        const lImg = safeStorage.getItem(`museum_day_${activeDay}_painted_image`);
        if (lImg) window.currentUserRatings.emotionImage = lImg;
        const lEmot = safeStorage.getItem(`museum_day_${activeDay}_painted_emotion`);
        if (lEmot) window.currentUserRatings.emotionText = lEmot;
    } catch(e) {}

    if (supabaseClient) {
        try {
            const { data: dbResp, error: respError } = await supabaseClient
                .from('respuestas_amiga_museo')
                .select('*')
                .eq('dia_id', activeDay);
                
            if (!respError && dbResp) {
                dbResp.forEach(row => {
                    if (row.respuesta.startsWith('⭐ Calificación Canción:')) {
                        const match = row.respuesta.match(/Calificación Canción: (\d+)\/5/);
                        if (match) window.currentUserRatings.song = parseInt(match[1]);
                    } else if (row.respuesta.startsWith('⭐ Calificación Obra:')) {
                        const match = row.respuesta.match(/Calificación Obra: (\d+)\/5/);
                        if (match) window.currentUserRatings.art = parseInt(match[1]);
                    } else if (row.respuesta.startsWith('🎨 Generó Obra:')) {
                        const parts = row.respuesta.split(' | URL: ');
                        const emotionText = parts[0].replace('🎨 Generó Obra: ', '').trim();
                        const imageUrl = parts[1] ? parts[1].trim() : '';
                        if (imageUrl) {
                            window.currentUserRatings.emotionImage = imageUrl;
                            window.currentUserRatings.emotionText = emotionText;
                            
                            safeStorage.setItem(`museum_day_${activeDay}_painted_image`, imageUrl);
                            safeStorage.setItem(`museum_day_${activeDay}_painted_emotion`, emotionText);
                        }
                    }
                });
            }
        } catch(e) {
            console.error("Fallo al obtener respuestas de Supabase:", e);
        }
    }

    actualizarVistaDOM(data);
}

function actualizarVistaDOM(data) {
    // 1. Nombres de salas y exposiciones en las cabeceras
    document.querySelectorAll('.room-name-placeholder').forEach(el => {
        el.textContent = data.nombre_sala;
    });
    document.querySelectorAll('.exhibition-title-placeholder').forEach(el => {
        el.textContent = data.exposicion;
    });

    // 2. Ticket de Entrada Retro
    const ticketDesc = document.getElementById('ticket-description');
    if (ticketDesc) ticketDesc.textContent = data.ficha_corta;
    const ticketCurator = document.getElementById('ticket-curator');
    if (ticketCurator) ticketCurator.textContent = data.curador;
    const ticketTime = document.getElementById('ticket-time');
    if (ticketTime) ticketTime.textContent = data.horario;
    const ticketNum = document.getElementById('ticket-number');
    if (ticketNum) ticketNum.textContent = `#000${activeDay === 0 ? 'M' : activeDay}`;

    // 3. Termómetros de Humor
    const tLabel1 = document.getElementById('term-label-1');
    // Reglas humorísticas dinámicas de Taquilla
    const rulesContainer = document.getElementById('ticket-rules-container');
    if (rulesContainer) {
        rulesContainer.innerHTML = '';
        if (data.reglas_humor && typeof data.reglas_humor === 'string') {
            const rules = data.reglas_humor.split(',');
            rules.forEach(rule => {
                const trimmedRule = rule.trim();
                if (!trimmedRule) return;
                
                const item = document.createElement('div');
                item.className = 'prohibition-item';
                item.style.fontSize = '0.82rem';
                item.style.marginBottom = '6px';
                item.style.display = 'flex';
                item.style.alignItems = 'center';
                item.style.gap = '8px';
                
                let emoji = '🚫';
                const lowerRule = trimmedRule.toLowerCase();
                if (lowerRule.includes('permitido') || lowerRule.includes('obligatorio') || lowerRule.includes('comer') || lowerRule.includes('sonreir') || lowerRule.includes('suspirar')) {
                    emoji = lowerRule.includes('chocolate') ? '🍫' : '✨';
                }
                
                item.innerHTML = `<span>${emoji}</span> <span style="opacity: 0.9; font-weight: 500;">${trimmedRule}</span>`;
                rulesContainer.appendChild(item);
            });
        }
    }

    // 3. Inyectar reproductor de música, carátula, título, autor y descripción del tema
    renderizarReproductorMusica(data.cancion_url);
    const musicDesc = document.getElementById('music-theme-desc');
    if (musicDesc) musicDesc.textContent = data.cancion_desc || 'Sin descripción de tema para hoy.';
    
    const musicCover = document.getElementById('music-cover-img');
    if (musicCover) {
        musicCover.src = data.cancion_caratula || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=340';
    }

    const musicTitle = document.getElementById('music-title');
    if (musicTitle) {
        musicTitle.textContent = data.cancion_titulo || 'Melodía';
    }
    const musicAuthor = document.getElementById('music-author');
    if (musicAuthor) {
        musicAuthor.textContent = data.cancion_autor || 'Colección Ivonne';
    }

    // 4. Inyectar y pintar obra de arte con la IA
    renderizarObraArte(data.prompt_ia, data.titulo_cuadro);
    configurarEfecto3D();
    
    // Cartela clásica de la obra de arte
    const artPlateInfo = document.getElementById('art-description-plate');
    if (artPlateInfo) {
        artPlateInfo.innerHTML = `
            <div class="label-plate-title">${data.titulo_cuadro || 'Obra sin título'}</div>
            <div class="label-plate-meta">${data.artista_cuadro || 'Colección Ivonne'} • 2026</div>
            <div class="label-plate-desc">"${data.cuadro_desc || 'Una hermosa obra para contemplar en silencio.'}"</div>
        `;
    }

    // Curiosidad del cuadro
    const artCuriosity = document.getElementById('art-curiosity-text');
    if (artCuriosity) {
        artCuriosity.textContent = data.curiosidad_cuadro || 'Esta obra guarda un secreto especial que solo el curador conoce.';
    }

    // 5. Obra Literaria
    const literaryPoem = document.getElementById('literary-poem');
    if (literaryPoem) {
        literaryPoem.textContent = data.poema || 'El arte de vivir es saber contemplar las pequeñas pausas.';
    }
    const literaryAuthor = document.getElementById('literary-author');
    if (literaryAuthor) {
        literaryAuthor.textContent = data.autor_poema || 'Anónimo';
    }

    // Resetear slider sensorial de la pintura
    const hueSlider = document.getElementById('art-hue-slider');
    const hueValLabel = document.getElementById('slider-hue-val');
    const artImg = document.getElementById('art-canvas-img');
    if (hueSlider) hueSlider.value = 0;
    if (hueValLabel) hueValLabel.textContent = "0°";
    if (artImg) artImg.style.filter = "none";

    // 6. Lienzo de Emociones y Generador IA
    const emotionQuestion = document.getElementById('emotion-generator-question');
    if (emotionQuestion) emotionQuestion.textContent = data.pregunta_trivia || '¿Cómo te sientes el día de hoy?';
    
    const techniqueDesc = document.getElementById('emotion-technique-desc');
    if (techniqueDesc) techniqueDesc.textContent = data.tecnica_pintura || 'Pintura al óleo abstracta con pinceladas cargadas.';
    
    const techniqueResultDesc = document.getElementById('emotion-technique-result-desc');
    if (techniqueResultDesc) techniqueResultDesc.textContent = data.tecnica_pintura || 'Pintura al óleo abstracta con pinceladas cargadas.';

    const formStateEl = document.getElementById('emotion-form-state');
    const loadingStateEl = document.getElementById('emotion-loading-state');
    const resultStateEl = document.getElementById('emotion-result-state');

    const emotionImg = document.getElementById('emotion-canvas-img');
    
    const emotionInput = document.getElementById('emotion-input-text');
    if (emotionInput) emotionInput.value = '';

    // Lógica Persistente: Si ya generó pintura hoy, mostrarla de inmediato en el marco
    if (window.currentUserRatings && window.currentUserRatings.emotionImage) {
        if (emotionImg) emotionImg.src = window.currentUserRatings.emotionImage;
        
        const emotionDesc = document.getElementById('emotion-user-description');
        if (emotionDesc) {
            emotionDesc.textContent = `"${window.currentUserRatings.emotionText || 'Sentir del día'}"`;
        }
        
        if (formStateEl) formStateEl.style.display = 'none';
        if (loadingStateEl) loadingStateEl.style.display = 'none';
        if (resultStateEl) resultStateEl.style.display = 'block';
    } else {
        if (formStateEl) formStateEl.style.display = 'block';
        if (loadingStateEl) loadingStateEl.style.display = 'none';
        if (resultStateEl) resultStateEl.style.display = 'none';
    }

    // Resetear calificaciones por estrellas en pantalla
    renderizarEstrellas('song', window.currentUserRatings.song || 0);
    renderizarEstrellas('art', window.currentUserRatings.art || 0);
}

// --- RENDERIZADO E INTERACTIVIDAD DE ESTRELLAS DE VALORACIÓN ---
function renderizarEstrellas(tipo, valor) {
    const selector = tipo === 'song' ? '#song-stars .star-item' : '#art-stars .star-item';
    const feedbackSelector = tipo === 'song' ? 'song-rating-feedback' : 'art-rating-feedback';
    const stars = document.querySelectorAll(selector);
    const feedback = document.getElementById(feedbackSelector);
    
    stars.forEach((star, idx) => {
        if (idx < valor) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });

    const parentRow = document.getElementById(tipo === 'song' ? 'song-stars' : 'art-stars');
    if (parentRow) {
        if (valor > 0) {
            parentRow.classList.add('rated');
        } else {
            parentRow.classList.remove('rated');
        }
    }

    if (feedback) {
        if (valor > 0) {
            feedback.textContent = `¡Calificado con ${valor}/5 estrellas! ⭐`;
        } else {
            feedback.textContent = 'Sin calificar aún.';
        }
    }
}

async function registrarCalificacionAmiga(tipo, valor) {
    const key = `museum_day_${activeDay}_rating_${tipo}`;
    
    // Validar si ya calificó anteriormente
    const yaCalifico = (tipo === 'song' && window.currentUserRatings.song > 0) ||
                        (tipo === 'art' && window.currentUserRatings.art > 0);
    if (yaCalifico) {
        alert("Ya has calificado esta obra anteriormente. ¡Tu valoración inicial ya está registrada en el catálogo!");
        return;
    }
    
    safeStorage.setItem(key, valor);
    
    if (tipo === 'song') {
        window.currentUserRatings.song = valor;
    } else {
        window.currentUserRatings.art = valor;
    }
    
    renderizarEstrellas(tipo, valor);
    
    const prefijo = tipo === 'song' ? 'melodía' : 'obra de arte';
    const textRespuesta = `⭐ Calificación ${tipo === 'song' ? 'Canción' : 'Obra'}: ${valor}/5`;
    
    try {
        if (supabaseClient) {
            const { error } = await supabaseClient
                .from('respuestas_amiga_museo')
                .insert([{ dia_id: activeDay, respuesta: textRespuesta }]);
            if (error) throw error;
        } else {
            guardarRespuestaLocal(activeDay, textRespuesta);
        }
        console.log(`Calificación de ${prefijo} guardada con éxito: ${valor}/5`);
    } catch(e) {
        console.error("Error al registrar calificación:", e);
        guardarRespuestaLocal(activeDay, textRespuesta);
    }
}

// --- RENDERIZADO DE ARTE IA ---
function renderizarObraArte(imagenUrlOrPrompt, titulo) {
    const imgEl = document.getElementById('art-canvas-img');
    const loaderEl = document.getElementById('art-image-loader');
    const titleEl = document.getElementById('art-title');

    if (!imgEl || !loaderEl || !titleEl) return;

    titleEl.textContent = titulo || "Obra de Arte";
    imgEl.style.display = 'none';
    loaderEl.style.display = 'flex';

    let imageUrl = "";

    // Verificar si es un enlace directo
    const esUrlDirecta = imagenUrlOrPrompt && typeof imagenUrlOrPrompt === 'string' && (
        imagenUrlOrPrompt.startsWith('http://') || 
        imagenUrlOrPrompt.startsWith('https://') || 
        imagenUrlOrPrompt.startsWith('/') || 
        imagenUrlOrPrompt.startsWith('./')
    );

    if (esUrlDirecta) {
        imageUrl = imagenUrlOrPrompt.trim();
    } else {
        // Generar URL de Pollinations.ai codificando el prompt
        const safePrompt = (imagenUrlOrPrompt && typeof imagenUrlOrPrompt === 'string') ? imagenUrlOrPrompt : 'museum artwork, oil painting, abstract';
        const encodedPrompt = encodeURIComponent(safePrompt);
        imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?nologo=true&private=true&width=512&height=512`;
    }

    // Precargar la imagen
    const tempImg = new Image();
    tempImg.onload = () => {
        imgEl.src = imageUrl;
        loaderEl.style.display = 'none';
        imgEl.style.display = 'block';
    };
    tempImg.onerror = () => {
        // Fallback elegante a una imagen artística si la URL falla
        imgEl.src = 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=512';
        loaderEl.style.display = 'none';
        imgEl.style.display = 'block';
    };
    tempImg.src = imageUrl;
}

// Inclinación 3D en el cuadro (Holograma interactivo)
function configurarEfecto3D() {
    return; // Deshabilitado para mantener el cuadro formal y estático
    const frame = document.getElementById('art-canvas-frame');
    if (!frame) return;

    frame.addEventListener('mousemove', (e) => {
        const rect = frame.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((centerY - y) / centerY) * 15;
        const rotateY = ((x - centerX) / centerX) * 15;

        frame.style.setProperty('--rx', `${rotateX}deg`);
        frame.style.setProperty('--ry', `${rotateY}deg`);
    });

    frame.addEventListener('mouseleave', () => {
        frame.style.setProperty('--rx', '0deg');
        frame.style.setProperty('--ry', '0deg');
    });
}

// Convertir links de Spotify/YouTube/Direct-Audio a reproductor ideal
function renderizarReproductorMusica(url) {
    const container = document.getElementById('music-player-container');
    if (!container) return;

    if (!url || typeof url !== 'string') {
        container.innerHTML = `
            <div style="font-size:0.85rem; opacity:0.6; text-align:center; padding:15px; border:1px dashed rgba(255,255,255,0.05); border-radius:12px;">
                🎵 Sin melodía cargada para hoy.
            </div>
        `;
        return;
    }

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
            <div class="music-container vintage-audio-player-wrapper">
                <audio id="custom-audio-el" src="${url}" preload="metadata"></audio>
                <div class="vintage-audio-player">
                    <button id="custom-play-btn" class="play-btn-circle">▶</button>
                    <div class="player-progress-area">
                        <span class="time-label" id="audio-current-time">0:00</span>
                        <div class="progress-bar-container" id="audio-progress-container">
                            <div class="progress-bar-fill" id="audio-progress-fill"></div>
                        </div>
                        <span class="time-label" id="audio-total-time">0:00</span>
                    </div>
                </div>
            </div>
        `;

        setTimeout(() => {
            const audio = document.getElementById('custom-audio-el');
            const playBtn = document.getElementById('custom-play-btn');
            const progressContainer = document.getElementById('audio-progress-container');
            const progressFill = document.getElementById('audio-progress-fill');
            const currentTimeLabel = document.getElementById('audio-current-time');
            const totalTimeLabel = document.getElementById('audio-total-time');

            if (!audio || !playBtn || !progressContainer || !progressFill || !currentTimeLabel || !totalTimeLabel) return;

            function format(secs) {
                if (isNaN(secs) || secs === Infinity) return "0:00";
                const m = Math.floor(secs / 60);
                const s = Math.floor(secs % 60);
                return `${m}:${s < 10 ? '0' : ''}${s}`;
            }

            playBtn.addEventListener('click', () => {
                if (audio.paused) {
                    audio.play();
                    playBtn.textContent = '❚❚';
                } else {
                    audio.pause();
                    playBtn.textContent = '▶';
                }
            });

            audio.addEventListener('timeupdate', () => {
                const pct = (audio.currentTime / (audio.duration || 1)) * 100;
                progressFill.style.width = pct + '%';
                currentTimeLabel.textContent = format(audio.currentTime);
                if (audio.duration) {
                    totalTimeLabel.textContent = format(audio.duration);
                }
            });

            audio.addEventListener('loadedmetadata', () => {
                totalTimeLabel.textContent = format(audio.duration);
            });

            // También por si se carga antes del evento
            if (audio.duration) {
                totalTimeLabel.textContent = format(audio.duration);
            }

            progressContainer.addEventListener('click', (e) => {
                const rect = progressContainer.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                audio.currentTime = pos * (audio.duration || 0);
            });

            audio.addEventListener('ended', () => {
                playBtn.textContent = '▶';
                progressFill.style.width = '0%';
                currentTimeLabel.textContent = '0:00';
            });
        }, 50);
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
    // --- -1. Lógica del Carrusel Deslizable y Popup de Técnica ---
    const slider = document.getElementById('museum-slider');
    const dots = document.querySelectorAll('.slider-dot');
    
    if (slider) {
        slider.addEventListener('scroll', () => {
            const scrollLeft = slider.scrollLeft;
            const width = slider.clientWidth || 1;
            const index = Math.round(scrollLeft / width);
            actualizarDots(index);

            // Mostrar el popup de técnica si llega a la tarjeta 5 (index 4) y no ha pintado hoy
            if (index === 4) {
                const hasPainted = window.currentUserRatings && window.currentUserRatings.emotionImage;
                if (!hasPainted && !window.techniqueClosedThisSession) {
                    const techniqueOverlay = document.getElementById('technique-popup-overlay');
                    const techniqueText = document.getElementById('technique-popup-text');
                    if (techniqueOverlay && techniqueText) {
                        techniqueText.textContent = currentData?.tecnica_pintura || 'Pintura al óleo abstracta con pinceladas cargadas.';
                        techniqueOverlay.style.display = 'flex';
                    }
                }
            }
        });
    }

    if (dots) {
        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                if (slider) {
                    slider.scrollLeft = idx * slider.clientWidth;
                    actualizarDots(idx);
                }
            });
        });
    }

    // Botón para cerrar el popup de técnica
    const btnCloseTech = document.getElementById('btn-close-technique');
    if (btnCloseTech) {
        btnCloseTech.addEventListener('click', () => {
            const techniqueOverlay = document.getElementById('technique-popup-overlay');
            if (techniqueOverlay) {
                techniqueOverlay.style.display = 'none';
                window.techniqueClosedThisSession = true;
            }
        });
    }

    // --- -2. Botón de Revelar Curiosidad (Modal) ---
    const btnCuriosity = document.getElementById('btn-reveal-curiosity');
    if (btnCuriosity) {
        btnCuriosity.addEventListener('click', () => {
            const curiosidad = currentData?.curiosidad_cuadro || 'Esta obra guarda un secreto especial que solo el curador conoce.';
            abrirModal('💡 Curiosidad del Cuadro', `
                <div style="font-family: var(--font-body); font-size: 0.95rem; line-height: 1.6; font-style: italic; text-align: center; color: #ede8dc; padding: 15px 10px;">
                    "${curiosidad}"
                </div>
            `);
        });
    }

    // --- -3. Lightbox Zoom a Pantalla Completa ---
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close-btn');

    function openLightbox(src) {
        if (!src || src.includes('rgba') || src.includes('blank') || src === window.location.href) return;
        if (lightboxImg && lightboxOverlay) {
            lightboxImg.src = src;
            lightboxOverlay.style.display = 'flex';
            setTimeout(() => {
                lightboxOverlay.classList.add('active');
            }, 10);
        }
    }

    function closeLightbox() {
        if (lightboxOverlay) {
            lightboxOverlay.classList.remove('active');
            setTimeout(() => {
                lightboxOverlay.style.display = 'none';
            }, 300);
        }
    }

    if (lightboxOverlay) {
        lightboxOverlay.addEventListener('click', closeLightbox);
    }
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    // Vincular click en las tres pinturas del museo
    const zoomArtImg = document.getElementById('art-canvas-img');
    if (zoomArtImg) {
        zoomArtImg.style.cursor = 'zoom-in';
        zoomArtImg.addEventListener('click', () => openLightbox(zoomArtImg.src));
    }
    const coverImg = document.getElementById('music-cover-img');
    if (coverImg) {
        coverImg.style.cursor = 'zoom-in';
        coverImg.addEventListener('click', () => openLightbox(coverImg.src));
    }
    const emotImg = document.getElementById('emotion-canvas-img');
    if (emotImg) {
        emotImg.style.cursor = 'zoom-in';
        emotImg.addEventListener('click', () => openLightbox(emotImg.src));
    }

    // --- 0. Disparador Secreto para Modo Curador (5 clics en el título) ---
    let clickCount = 0;
    const title = document.querySelector('.ticket-brand-title');
    if (title) {
        title.style.cursor = 'pointer'; // Dar retroalimentación visual al curador
        title.addEventListener('click', () => {
            clickCount++;
            if (clickCount >= 5) {
                clickCount = 0;
                solicitarPasswordAdmin();
            }
        });
    }

    // --- 1. Generador de Arte Interactivo (Lienzo de Emociones con Estados) ---
    const btnPaintEmotion = document.getElementById('btn-paint-emotion');
    if (btnPaintEmotion) {
        btnPaintEmotion.addEventListener('click', async () => {
            const inputEl = document.getElementById('emotion-input-text');
            const emotionText = (inputEl ? inputEl.value : '').trim();
            if (!emotionText) {
                alert("Por favor, escribe cómo te sientes antes de pintar.");
                return;
            }

            const formStateEl = document.getElementById('emotion-form-state');
            const loadingStateEl = document.getElementById('emotion-loading-state');
            const resultStateEl = document.getElementById('emotion-result-state');

            const imgEl = document.getElementById('emotion-canvas-img');
            const titleEl = document.getElementById('emotion-art-title');

            if (!formStateEl || !loadingStateEl || !resultStateEl || !imgEl || !titleEl) return;

            // Ocultar formulario, mostrar cargador
            formStateEl.style.display = 'none';
            loadingStateEl.style.display = 'flex';

            // Construir prompt final
            let basePrompt = currentData?.prompt_base_ia || "an abstract oil painting representing: [EMOTION], museum masterpiece";
            let finalPrompt;
            if (basePrompt.includes('[EMOTION]')) {
                finalPrompt = basePrompt.replace('[EMOTION]', emotionText);
            } else {
                finalPrompt = `${basePrompt}, representing: ${emotionText}`;
            }

            const encodedPrompt = encodeURIComponent(finalPrompt);
            const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?nologo=true&private=true&width=512&height=512`;

            // Precargar imagen generada
            const tempImg = new Image();
            tempImg.onload = async () => {
                // Guardar en variables globales
                window.currentUserRatings.emotionImage = imageUrl;
                window.currentUserRatings.emotionText = emotionText;

                // Persistir localmente
                safeStorage.setItem(`museum_day_${activeDay}_painted_image`, imageUrl);
                safeStorage.setItem(`museum_day_${activeDay}_painted_emotion`, emotionText);

                // Guardar en Supabase / local con formato que incluye el enlace
                const formattedRes = `🎨 Generó Obra: ${emotionText} | URL: ${imageUrl}`;
                try {
                    if (supabaseClient) {
                        const { error } = await supabaseClient
                            .from('respuestas_amiga_museo')
                            .insert([{ dia_id: activeDay, respuesta: formattedRes }]);
                        if (error) throw error;
                    } else {
                        guardarRespuestaLocal(activeDay, formattedRes);
                    }
                } catch(e) {
                    console.error("Error al registrar respuesta del generador:", e);
                    guardarRespuestaLocal(activeDay, formattedRes);
                }

                // Renderizar resultado final
                imgEl.src = imageUrl;
                
                const emotionDesc = document.getElementById('emotion-user-description');
                if (emotionDesc) {
                    emotionDesc.textContent = `"${emotionText}"`;
                }

                // Alternar estados
                loadingStateEl.style.display = 'none';
                resultStateEl.style.display = 'block';
            };
            tempImg.onerror = () => {
                loadingStateEl.style.display = 'none';
                formStateEl.style.display = 'block';
                alert("❌ Ocurrió un error al contactar al servidor de arte. Por favor, reintenta.");
            };
            tempImg.src = imageUrl;
        });
    }

    // --- 1.1 Interactividad de Estrellas de Música ---
    const songStars = document.querySelectorAll('#song-stars .star-item');
    songStars.forEach(star => {
        star.addEventListener('click', () => {
            const val = parseInt(star.getAttribute('data-value'));
            registrarCalificacionAmiga('song', val);
        });
        star.addEventListener('mouseover', () => {
            const val = parseInt(star.getAttribute('data-value'));
            songStars.forEach((s, idx) => {
                if (idx < val) s.classList.add('hover-active');
                else s.classList.remove('hover-active');
            });
        });
        star.addEventListener('mouseout', () => {
            songStars.forEach(s => s.classList.remove('hover-active'));
        });
    });

    // --- 1.2 Interactividad de Estrellas de Arte ---
    const artStars = document.querySelectorAll('#art-stars .star-item');
    artStars.forEach(star => {
        star.addEventListener('click', () => {
            const val = parseInt(star.getAttribute('data-value'));
            registrarCalificacionAmiga('art', val);
        });
        star.addEventListener('mouseover', () => {
            const val = parseInt(star.getAttribute('data-value'));
            artStars.forEach((s, idx) => {
                if (idx < val) s.classList.add('hover-active');
                else s.classList.remove('hover-active');
            });
        });
        star.addEventListener('mouseout', () => {
            artStars.forEach(s => s.classList.remove('hover-active'));
        });
    });



    // --- Modales Genéricos ---
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

    // --- PANEL DE CONTROL Y CMS FLOATING BUTTON ---
    const btnTriggerSetup = document.getElementById('setup-trigger-btn');
    if (btnTriggerSetup) {
        btnTriggerSetup.addEventListener('click', abrirPanelControlCMS);
    }

    // --- MAPA/GUÍA DEL MUSEO FLOATING BUTTON ---
    const btnTriggerMap = document.getElementById('museum-map-btn');
    if (btnTriggerMap) {
        btnTriggerMap.addEventListener('click', abrirGuiaSalas);
    }

    // Configurar botón flotante de Recepción (Regresar al Boleto)
    const btnReception = document.getElementById('reception-btn');
    if (btnReception) {
        btnReception.addEventListener('click', () => {
            cambiarPaso('step-story', 'step-ticket', () => {
                btnReception.style.display = 'none';
                renderizarBoleto();
            });
        });
    }

    // --- Slider Sensorial ---
    const hueSlider = document.getElementById('art-hue-slider');
    const hueValLabel = document.getElementById('slider-hue-val');
    const artImg = document.getElementById('art-canvas-img');
    if (hueSlider && hueValLabel && artImg) {
        hueSlider.addEventListener('input', (e) => {
            const val = e.target.value;
            hueValLabel.textContent = `${val}°`;
            artImg.style.filter = `hue-rotate(${val}deg) brightness(1.05) contrast(1.05)`;
        });
    }
}

// --- NAVEGACIÓN ENTRE PAVELLONES DE LA SALA ---
function switchMuseumTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.museum-tab-content').forEach(content => {
        content.classList.remove('active');
    });

    const activeBtn = document.querySelector(`.tab-btn[data-tab="${tabName}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    const activeContent = document.getElementById(`tab-content-${tabName}`);
    if (activeContent) {
        activeContent.classList.add('active');
    }
}

// --- GUÍA DE SALAS (MAPA DEL MUSEO) ---
function abrirGuiaSalas() {
    const dayNames = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '8px';
    container.style.maxHeight = '55vh';
    container.style.overflowY = 'auto';
    container.style.paddingRight = '5px';
    
    for (let i = 0; i <= 6; i++) {
        let name = FALLBACK_CONTENT[i].nombre_sala;
        let expo = FALLBACK_CONTENT[i].exposicion;
        
        const local = safeStorage.getItem("museum_day_" + i + "_override");
        if (local) {
            try {
                const parsed = JSON.parse(local);
                name = parsed.nombre_sala || name;
                expo = parsed.exposicion || expo;
            } catch(e){}
        }
        
        const isActive = (i === activeDay);
        
        const item = document.createElement('div');
        item.className = `museum-map-item ${isActive ? 'active' : ''}`;
        item.style.display = 'flex';
        item.style.justifyContent = 'space-between';
        item.style.alignItems = 'center';
        item.style.padding = '12px';
        item.style.borderRadius = '12px';
        item.style.background = isActive ? 'rgba(223, 183, 108, 0.08)' : 'rgba(255,255,255,0.03)';
        item.style.border = `1px solid ${isActive ? 'var(--primary-color)' : 'rgba(255,255,255,0.06)'}`;
        item.style.cursor = 'pointer';
        item.style.transition = 'all 0.2s ease';
        
        item.innerHTML = `
            <div style="text-align: left;">
                <strong style="color: ${isActive ? 'var(--primary-color)' : 'var(--text-color)'}; font-size: 0.92rem;">
                    ${dayNames[i]} • ${name}
                </strong>
                <div style="font-size: 0.78rem; opacity: 0.7; margin-top: 2px;">
                    ${expo}
                </div>
            </div>
            <div style="font-size: 1.1rem;">
                ${isActive ? '📍' : '🚶\u200d♂️'}
            </div>
        `;
        
        item.addEventListener('mouseenter', () => {
            if (!isActive) item.style.background = 'rgba(255,255,255,0.06)';
        });
        item.addEventListener('mouseleave', () => {
            if (!isActive) item.style.background = 'rgba(255,255,255,0.03)';
        });
        
        item.addEventListener('click', () => {
            activeDay = i;
            const urlParams = new URLSearchParams(window.location.search);
            const isDev = urlParams.get('dev') === 'true';
            if (isDev) {
                window.history.pushState({}, '', `?dia=${i}&dev=true`);
                configurarSelectorDias();
            }
            
            cerrarModal();
            cargarContenidoDia();
            detectarDiaActual();
        });
        
        container.appendChild(item);
    }
    
    abrirModal('🗺️ Guía de Salas del Museo', '');
    const modalBody = document.getElementById('modal-body');
    if (modalBody) {
        modalBody.innerHTML = '<p style="font-size: 0.85rem; margin-bottom: 15px; text-align: left; opacity: 0.8;">Selecciona a qué sala deseas dirigirte en tu recorrido nocturno:</p>';
        modalBody.appendChild(container);
    }
}

// --- CMS ADMINISTRADOR: PANEL DE CONTROL Y CONFIGURACIÓN ---
function abrirPanelControlCMS() {
    const currentUrl = safeStorage.getItem('supabase_url') || '';
    const currentKey = safeStorage.getItem('supabase_key') || '';
    
    const dayOptions = [
        { val: 0, text: "Lunes (Mantenimiento / Cerrado)" },
        { val: 1, text: "Martes (Galería Gastronómica)" },
        { val: 2, text: "Miércoles (Pabellón del Escapismo)" },
        { val: 3, text: "Jueves (Salón del Cacao)" },
        { val: 4, text: "Viernes (Sala de la Inocencia)" },
        { val: 5, text: "Sábado (Patio de Arte Pop)" },
        { val: 6, text: "Domingo (Sala de Descanso Extendido)" }
    ];
    
    const optionsHtml = dayOptions.map(opt => 
        `<option value="${opt.val}" ${opt.val === activeDay ? 'selected' : ''}>${opt.text}</option>`
    ).join('');

    abrirModal('⚙️ Panel de Control & CMS', `
        <div class="cms-editor-container" style="max-height: 65vh; overflow-y: auto; padding-right: 5px; text-align: left;">
            <p style="font-size: 0.85rem; margin-bottom: 12px; color: var(--text-color); opacity: 0.8;">
                Modifica el contenido de las salas. Los cambios se guardarán localmente e intentarán sincronizarse en Supabase.
            </p>
            
            <label style="font-size: 0.8rem; font-weight: 700;">Seleccionar Sala a Editar:</label>
            <select id="cms-select-day" class="input-premium" style="width:100%; padding: 8px; margin-bottom: 15px; border-radius: 8px;">
                ${optionsHtml}
            </select>
            
            <div id="cms-fields-wrapper">
                <!-- Los campos se cargan dinámicamente -->
            </div>
            
            <button id="btn-save-cms" class="btn" style="width: 100%; margin-top: 15px; margin-bottom: 20px;">
                Guardar Cambios 💾
            </button>
            <div id="cms-feedback" class="form-feedback" style="margin-bottom: 15px;"></div>
            
            <hr style="border: 0; border-top: 1px dashed rgba(200, 169, 110, 0.15); margin: 20px 0;">
            
            <details id="cms-responses-details" style="margin-bottom: 15px; cursor: pointer;">
                <summary style="font-size: 0.82rem; font-weight: 700; color: var(--primary-color);">📊 Respuestas y Valoraciones de Ivonne</summary>
                <div id="cms-responses-container" style="margin-top: 10px; padding: 12px; background: rgba(20, 15, 9, 0.4); border: 1px solid rgba(200,169,110,0.15); border-radius: 4px; max-height: 35vh; overflow-y: auto;">
                    Cargando respuestas... ⏳
                </div>
            </details>
            
            <details style="margin-bottom: 10px; cursor: pointer;">
                <summary style="font-size: 0.82rem; font-weight: 700; color: var(--primary-color);">🔧 Credenciales de Supabase</summary>
                <div class="setup-panel active" style="margin-top: 10px; padding: 10px; background: rgba(0,0,0,0.03); border-radius: 8px;">
                    <label style="font-size:0.75rem; font-weight:700;">Project URL:</label>
                    <input type="text" id="setup-url" class="input-premium" style="padding: 6px; font-size:0.8rem; margin-bottom: 8px;" value="${currentUrl}" placeholder="https://xxxx.supabase.co">
                    
                    <label style="font-size:0.75rem; font-weight:700;">Anon / Public Key:</label>
                    <input type="password" id="setup-key" class="input-premium" style="padding: 6px; font-size:0.8rem; margin-bottom: 8px;" value="${currentKey}" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...">
                    
                    <button id="btn-save-setup" class="btn btn-secondary btn-small" style="padding: 5px 10px; font-size: 0.75rem; margin-top: 5px; width:auto; display:inline-block;">Conectar y Guardar</button>
                    <button id="btn-clear-setup" class="btn btn-secondary btn-small" style="padding: 5px 10px; font-size: 0.75rem; margin-top: 5px; color:#ef4444; width:auto; display:inline-block;">Limpiar Todo</button>
                </div>
            </details>
        </div>
    `);

    // Escuchar la apertura del reporte de Ivonne
    const respDetails = document.getElementById('cms-responses-details');
    if (respDetails) {
        respDetails.addEventListener('toggle', (e) => {
            if (respDetails.open) {
                renderizarRespuestasAdmin();
            }
        });
    }

    async function renderizarRespuestasAdmin() {
        const container = document.getElementById('cms-responses-container');
        if (!container) return;

        container.innerHTML = `<div style="text-align:center; padding:10px; font-size:0.8rem;">Cargando historial de respuestas... ⏳</div>`;

        let responses = [];
        if (supabaseClient) {
            try {
                const { data, error } = await supabaseClient
                    .from('respuestas_amiga_museo')
                    .select('*')
                    .order('created_at', { ascending: false });
                if (error) {
                    console.error("Error al consultar respuestas de Supabase:", error);
                }
                if (!error && data) {
                    responses = data;
                }
            } catch(e) {
                console.error("Error al leer respuestas de Supabase:", e);
            }
        }

        // Leer también locales
        try {
            const locales = JSON.parse(safeStorage.getItem('respuestas_amiga_local')) || [];
            responses = responses.concat(locales);
        } catch(e){}

        // De-duplicar por contenido de respuesta y día
        const unique = [];
        const seen = new Set();
        responses.forEach(item => {
            const key = `${item.dia_id}_${item.respuesta}`;
            if (!seen.has(key)) {
                seen.add(key);
                unique.push(item);
            }
        });
        responses = unique;

        if (responses.length === 0) {
            container.innerHTML = `<div style="text-align:center; padding:15px; font-size:0.8rem; opacity:0.6;">Ivonne no ha interactuado ni calificado nada aún.</div>`;
            return;
        }

        // Agrupar por día
        const grouped = { 0:[], 1:[], 2:[], 3:[], 4:[], 5:[], 6:[] };
        responses.forEach(resp => {
            const d = parseInt(resp.dia_id);
            if (!isNaN(d) && d >= 0 && d <= 6) {
                grouped[d].push(resp);
            }
        });

        const dayNames = {
            0: "Lunes (Mantenimiento)",
            1: "Martes (Gastronomía)",
            2: "Miércoles (Escapismo)",
            3: "Jueves (Cacao)",
            4: "Viernes (Inocencia)",
            5: "Sábado (Arte Pop)",
            6: "Domingo (Descanso)"
        };

        let html = '<div style="display:flex; flex-direction:column; gap:12px; font-size:0.8rem; text-align:left;">';
        
        for (let i = 0; i <= 6; i++) {
            const list = grouped[i];
            
            // Buscar última calificación de canción, obra y pintura en este día
            let latestSong = null;
            let latestArt = null;
            let latestPaint = null;
            let otherInteractions = [];

            if (list) {
                list.forEach(item => {
                    const text = item.respuesta;
                    if (text && typeof text === 'string') {
                        if (text.includes('Calificación Canción')) {
                            if (!latestSong) {
                                const valMatch = text.match(/(\d+\/5)/);
                                latestSong = valMatch ? valMatch[1] : text;
                            }
                        } else if (text.includes('Calificación Obra')) {
                            if (!latestArt) {
                                const valMatch = text.match(/(\d+\/5)/);
                                latestArt = valMatch ? valMatch[1] : text;
                            }
                        } else if (text.includes('Generó Obra:') || text.includes('🎨')) {
                            if (!latestPaint) {
                                const parts = text.split(' | URL: ');
                                const emotion = parts[0].replace('🎨 Generó Obra: ', '').replace('Generó Obra: ', '').trim();
                                const url = parts[1] ? parts[1].trim() : '';
                                latestPaint = { emotion, url };
                            }
                        } else {
                            otherInteractions.push(item);
                        }
                    }
                });
            }

            const hasActivity = latestSong || latestArt || latestPaint || otherInteractions.length > 0;

            html += `
                <div style="border-bottom: 1px dashed rgba(200, 169, 110, 0.15); padding-bottom: 10px;">
                    <strong style="color: var(--primary-color); display:block; margin-bottom: 5px;">📅 ${dayNames[i]}</strong>
            `;

            if (!hasActivity) {
                html += `<span style="opacity: 0.5; font-style: italic; padding-left: 8px;">Sin actividad registrada.</span>`;
            } else {
                html += `<div style="padding-left: 8px; display:flex; flex-direction:column; gap:4px;">`;
                
                if (latestSong) {
                    html += `<div>🎵 <strong>Calificación de la Música:</strong> ${latestSong}</div>`;
                }
                if (latestArt) {
                    html += `<div>🎨 <strong>Calificación del Cuadro de Galería:</strong> ${latestArt}</div>`;
                }
                if (latestPaint) {
                    html += `
                        <div style="margin-top: 5px; display: flex; align-items: center; gap: 8px;">
                            <div style="flex: 1;">🧠 "${latestPaint.emotion}"</div>
                            ${latestPaint.url ? `
                                <img src="${latestPaint.url}" style="width: 50px; height: 50px; object-fit: cover; border: 1px solid var(--primary-color); border-radius: 2px; cursor: pointer;" onclick="window.open('${latestPaint.url}', '_blank')" title="Ampliar pintura">
                            ` : ''}
                        </div>
                    `;
                }
                
                if (otherInteractions.length > 0) {
                    otherInteractions.forEach(oth => {
                        html += `<div style="opacity: 0.85;">💬 ${oth.respuesta} <small style="opacity: 0.5;">(${new Date(oth.created_at || Date.now()).toLocaleDateString()})</small></div>`;
                    });
                }

                html += `</div>`;
            }

            html += `</div>`;
        }

        html += '</div>';
        container.innerHTML = html;
    }

    async function cargarCamposEdicion(diaId) {
        const wrapper = document.getElementById('cms-fields-wrapper');
        if (!wrapper) return;
        
        wrapper.innerHTML = `<div style="text-align:center; padding:20px; font-size:0.9rem;">Cargando datos... ⏳</div>`;
        
        let data = null;
        
        const local = safeStorage.getItem("museum_day_" + diaId + "_override");
        if (local) {
            try { data = Object.assign({}, FALLBACK_CONTENT[diaId], JSON.parse(local)); } catch(e){}
        }
        
        if (!data && supabaseClient) {
            try {
                const { data: dbData, error } = await supabaseClient
                    .from('semana_museo_v2')
                    .select('*')
                    .eq('id', diaId)
                    .single();
                if (!error && dbData) {
                    data = deserializarDatosDia(dbData, diaId);
                }
            } catch (e) {}
        }
        
        if (!data) {
            data = FALLBACK_CONTENT[diaId];
        }

        wrapper.innerHTML = `
            <div style="display:flex; flex-direction:column; gap:8px;">
                <label style="font-size:0.75rem; font-weight:700; margin-top:5px;">Nombre de la Sala / Temática:</label>
                <input type="text" id="cms-room-name" class="input-premium" style="margin-bottom:2px;" value="${data.nombre_sala || ''}" placeholder="Ej: Galería Gastronómica">
                
                <label style="font-size:0.75rem; font-weight:700;">Título de la Exposición:</label>
                <input type="text" id="cms-exhibition-title" class="input-premium" style="margin-bottom:2px;" value="${data.exposicion || ''}" placeholder="Ej: El Arte del Buen Diente">

                <h4 style="margin: 10px 0 2px; font-size: 0.8rem; color: var(--primary-color); border-bottom: 1px solid rgba(200,169,110,0.15); padding-bottom: 4px;">🎟️ Tarjeta 1: Datos de Taquilla</h4>
                
                <label style="font-size:0.72rem; font-weight:700;">Curador:</label>
                <input type="text" id="cms-curator" class="input-premium" style="margin-bottom:2px;" value="${data.curador || ''}">

                <label style="font-size:0.72rem; font-weight:700;">Horario:</label>
                <input type="text" id="cms-time" class="input-premium" style="margin-bottom:2px;" value="${data.horario || ''}">

                <label style="font-size:0.72rem; font-weight:700;">Ficha Técnica / Corta (Descripción):</label>
                <textarea id="cms-ficha-corta" class="textarea-premium" style="min-height:50px; font-size:0.85rem; margin-bottom:2px;">${data.ficha_corta || ''}</textarea>

                <label style="font-size:0.72rem; font-weight:700;">Reglas Humorísticas (Separadas por comas):</label>
                <textarea id="cms-reglas-humor" class="textarea-premium" style="min-height:50px; font-size:0.85rem; margin-bottom:2px;" placeholder="Ej: Prohibido el estrés, Permitido comer chocolate">${data.reglas_humor || ''}</textarea>

                <h4 style="margin: 10px 0 2px; font-size: 0.8rem; color: var(--primary-color); border-bottom: 1px solid rgba(200,169,110,0.15); padding-bottom: 4px;">🎵 Tarjeta 2: Cuadro Musical</h4>

                <label style="font-size:0.75rem; font-weight:700;">Canción (Link Spotify/YT o URL directa de MP3):</label>
                <input type="text" id="cms-cancion" class="input-premium" style="margin-bottom:2px;" value="${data.cancion_url || ''}" placeholder="https://.../cancion.mp3">

                <label style="font-size:0.75rem; font-weight:700;">Título de la Canción:</label>
                <input type="text" id="cms-cancion-titulo" class="input-premium" style="margin-bottom:2px;" value="${data.cancion_titulo || ''}" placeholder="Ej: La Noche Estrellada">

                <label style="font-size:0.75rem; font-weight:700;">Artista / Autor de la Canción:</label>
                <input type="text" id="cms-cancion-autor" class="input-premium" style="margin-bottom:2px;" value="${data.cancion_autor || ''}" placeholder="Ej: Vincent de las Melodías">

                <label style="font-size:0.75rem; font-weight:700;">Descripción del Tema Musical:</label>
                <textarea id="cms-cancion-desc" class="textarea-premium" style="min-height:45px; font-size:0.85rem; margin-bottom:2px;" placeholder="Explica de qué trata o la vibra de la canción...">${data.cancion_desc || ''}</textarea>

                <label style="font-size:0.75rem; font-weight:700;">URL de la Carátula de la Canción (Imagen):</label>
                <input type="text" id="cms-cancion-caratula" class="input-premium" style="margin-bottom:2px;" value="${data.cancion_caratula || ''}" placeholder="https://.../imagen.png">

                <h4 style="margin: 10px 0 2px; font-size: 0.8rem; color: var(--primary-color); border-bottom: 1px solid rgba(200,169,110,0.15); padding-bottom: 4px;">🎨 Tarjeta 3: Galería de Arte</h4>

                <label style="font-size:0.75rem; font-weight:700;">Título del Cuadro:</label>
                <input type="text" id="cms-art-title" class="input-premium" style="margin-bottom:2px;" value="${data.titulo_cuadro || ''}" placeholder="Ej: El Banquete Nocturno">

                <label style="font-size:0.75rem; font-weight:700;">Artista / Autor del Cuadro:</label>
                <input type="text" id="cms-art-artist" class="input-premium" style="margin-bottom:2px;" value="${data.artista_cuadro || ''}" placeholder="Ej: Colección Ivonne">

                <label style="font-size:0.75rem; font-weight:700;">Descripción / Concepto del Cuadro:</label>
                <textarea id="cms-cuadro-desc" class="textarea-premium" style="min-height:45px; font-size:0.85rem; margin-bottom:2px;" placeholder="Descripción poética o crítica del cuadro...">${data.cuadro_desc || ''}</textarea>

                <label style="font-size:0.75rem; font-weight:700;">Imagen de la Obra (Link de Imagen o Prompt para IA):</label>
                <textarea id="cms-art-prompt" class="textarea-premium" style="min-height:45px; font-size:0.85rem; margin-bottom:2px;" placeholder="https://.../cuadro.png o prompt en inglés">${data.prompt_ia || ''}</textarea>

                <label style="font-size:0.75rem; font-weight:700;">Curiosidad o Trivia del Cuadro:</label>
                <textarea id="cms-curiosidad-cuadro" class="textarea-premium" style="min-height:45px; font-size:0.85rem; margin-bottom:2px;" placeholder="¿Sabías que esta obra...?">${data.curiosidad_cuadro || ''}</textarea>

                <h4 style="margin: 10px 0 2px; font-size: 0.8rem; color: var(--primary-color); border-bottom: 1px solid rgba(200,169,110,0.15); padding-bottom: 4px;">📖 Tarjeta 4: Obra Literaria (Poema)</h4>

                <label style="font-size:0.75rem; font-weight:700;">Frase o Poema del Día:</label>
                <textarea id="cms-poema" class="textarea-premium" style="min-height:55px; font-size:0.85rem; margin-bottom:2px;" placeholder="Escribe el poema o pensamiento...">${data.poema || ''}</textarea>

                <label style="font-size:0.75rem; font-weight:700;">Autor de la Frase / Poema:</label>
                <input type="text" id="cms-autor-poema" class="input-premium" style="margin-bottom:2px;" value="${data.autor_poema || ''}" placeholder="Ej: Pablo Neruda">

                <h4 style="margin: 10px 0 2px; font-size: 0.8rem; color: var(--primary-color); border-bottom: 1px solid rgba(200,169,110,0.15); padding-bottom: 4px;">🧠 Tarjeta 5: Lienzo de Emociones</h4>

                <label style="font-size:0.75rem; font-weight:700;">Explicación de la Técnica de Pintura:</label>
                <textarea id="cms-tecnica-pintura" class="textarea-premium" style="min-height:45px; font-size:0.85rem; margin-bottom:2px;" placeholder="Ej: Acuarela vintage con suaves tonos pastel...">${data.tecnica_pintura || ''}</textarea>

                <label style="font-size:0.75rem; font-weight:700;">Pregunta de Emoción:</label>
                <input type="text" id="cms-trivia-question" class="input-premium" style="margin-bottom:2px;" value="${data.pregunta_trivia || '¿Cómo te sientes el día de hoy?'}" placeholder="¿Cómo te sientes el día de hoy?">

                <label style="font-size:0.75rem; font-weight:700;">Prompt Base de Generador IA (Usa [EMOTION]):</label>
                <textarea id="cms-prompt-base-ia" class="textarea-premium" style="min-height:45px; font-size:0.85rem; margin-bottom:2px;">${data.prompt_base_ia || ''}</textarea>
            </div>
        `;
    }

    const selectDia = document.getElementById('cms-select-day');
    cargarCamposEdicion(parseInt(selectDia.value));

    selectDia.addEventListener('change', (e) => {
        cargarCamposEdicion(parseInt(e.target.value));
    });

    document.getElementById('btn-save-cms').addEventListener('click', async () => {
        const feedback = document.getElementById('cms-feedback');
        const btnSave = document.getElementById('btn-save-cms');
        const diaId = parseInt(selectDia.value);

        const roomName = document.getElementById('cms-room-name').value.trim();
        const exhibitionTitle = document.getElementById('cms-exhibition-title').value.trim();
        
        const curator = document.getElementById('cms-curator').value.trim();
        const time = document.getElementById('cms-time').value.trim();
        const fichaCorta = document.getElementById('cms-ficha-corta').value.trim();
        const reglasHumor = document.getElementById('cms-reglas-humor').value.trim();

        const cancion = document.getElementById('cms-cancion').value.trim();
        const cancionTitulo = document.getElementById('cms-cancion-titulo').value.trim();
        const cancionAutor = document.getElementById('cms-cancion-autor').value.trim();
        const cancionDesc = document.getElementById('cms-cancion-desc').value.trim();
        const cancionCaratula = document.getElementById('cms-cancion-caratula').value.trim();

        const artTitle = document.getElementById('cms-art-title').value.trim();
        const artArtist = document.getElementById('cms-art-artist').value.trim();
        const cuadroDesc = document.getElementById('cms-cuadro-desc').value.trim();
        const artPrompt = document.getElementById('cms-art-prompt').value.trim();
        const curiosidadCuadro = document.getElementById('cms-curiosidad-cuadro').value.trim();

        const poema = document.getElementById('cms-poema').value.trim();
        const autorPoema = document.getElementById('cms-autor-poema').value.trim();

        const tecnicaPintura = document.getElementById('cms-tecnica-pintura').value.trim();
        const triviaQuestion = document.getElementById('cms-trivia-question').value.trim();
        const promptBaseIa = document.getElementById('cms-prompt-base-ia').value.trim();

        if (!roomName || !exhibitionTitle || !artTitle || !artPrompt || !fichaCorta) {
            feedback.className = 'form-feedback error';
            feedback.style.display = 'block';
            feedback.textContent = '❌ Rellena los campos obligatorios (Sala, Exposición, Título de Cuadro, Prompt e Info de Taquilla).';
            return;
        }

        btnSave.disabled = true;
        btnSave.textContent = "Guardando...";
        feedback.style.display = 'none';

        // Estructura completa plana para LocalStorage
        const customData = {
            nombre_sala: roomName,
            exposicion: exhibitionTitle,
            curador: curator,
            horario: time,
            ficha_corta: fichaCorta,
            reglas_humor: reglasHumor,
            cancion_url: cancion,
            cancion_titulo: cancionTitulo,
            cancion_autor: cancionAutor,
            cancion_desc: cancionDesc,
            cancion_caratula: cancionCaratula,
            titulo_cuadro: artTitle,
            artista_cuadro: artArtist,
            cuadro_desc: cuadroDesc,
            prompt_ia: artPrompt,
            curiosidad_cuadro: curiosidadCuadro,
            poema: poema,
            autor_poema: autorPoema,
            tecnica_pintura: tecnicaPintura,
            pregunta_trivia: triviaQuestion,
            prompt_base_ia: promptBaseIa
        };

        safeStorage.setItem("museum_day_" + diaId + "_override", JSON.stringify(customData));

        let savedCloud = false;

        if (supabaseClient) {
            try {
                const { error } = await supabaseClient
                    .from('semana_museo_v2')
                    .upsert([
                        {
                            id: diaId,
                            nombre_sala: roomName,
                            exposicion: exhibitionTitle,
                            curador: curator,
                            horario: time,
                            ficha_corta: fichaCorta,
                            reglas_humor: reglasHumor,
                            cancion_url: cancion,
                            cancion_titulo: cancionTitulo,
                            cancion_autor: cancionAutor,
                            cancion_desc: cancionDesc,
                            cancion_caratula: cancionCaratula,
                            titulo_cuadro: artTitle,
                            artista_cuadro: artArtist,
                            cuadro_desc: cuadroDesc,
                            prompt_ia: artPrompt,
                            curiosidad_cuadro: curiosidadCuadro,
                            poema: poema,
                            autor_poema: autorPoema,
                            tecnica_pintura: tecnicaPintura,
                            pregunta_trivia: triviaQuestion,
                            prompt_base_ia: promptBaseIa
                        }
                    ]);

                if (error) throw error;
                savedCloud = true;
            } catch (err) {
                console.error("Error al sincronizar con la nube:", err);
            }
        }

        feedback.className = 'form-feedback success';
        feedback.style.display = 'block';
        if (savedCloud) {
            feedback.innerHTML = '✨ ¡Guardado con éxito en Supabase y localmente! ✨';
        } else {
            feedback.innerHTML = '💾 ¡Guardado localmente! (Sin conexión a la base de datos)';
        }

        setTimeout(() => {
            btnSave.disabled = false;
            btnSave.textContent = "Guardar Cambios 💾";
            cerrarModal();
            if (diaId === activeDay) {
                cargarContenidoDia();
                detectarDiaActual();
            }
        }, 1500);
    });

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

    document.getElementById('btn-clear-setup').addEventListener('click', () => {
        safeStorage.removeItem('supabase_url');
        safeStorage.removeItem('supabase_key');
        for (let i = 0; i <= 6; i++) {
            safeStorage.removeItem("museum_day_" + i + "_override");
        }
        cerrarModal();
        window.location.reload();
    });
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

// Reiniciar la animación del cuadro de galería al entrar en la vista
function reiniciarAnimacionFlor() {
    const frame = document.getElementById('art-canvas-frame');
    if (frame) {
        frame.style.opacity = '0';
        frame.style.setProperty('--rx', '15deg');
        frame.style.setProperty('--ry', '0deg');
        frame.style.setProperty('--s', '0.92');
        frame.offsetHeight; // Forzar reflow
        
        frame.style.transition = 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        frame.style.opacity = '1';
        frame.style.setProperty('--rx', '0deg');
        frame.style.setProperty('--ry', '0deg');
        frame.style.setProperty('--s', '1');
        
        setTimeout(() => {
            frame.style.transition = 'transform 0.1s ease, box-shadow 0.3s ease';
        }, 800);
    }
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
    if (overlay) {
        overlay.classList.remove('active');
        const modalBody = document.getElementById('modal-body');
        if (modalBody) modalBody.innerHTML = '';
        overlay.removeAttribute('data-active-act');
    }
}
