// Datos de los proyectos
const projectData = {
    "agendas": {
        title: "Agendas o libretas",
        difficulty: "Alta",
        time: "2 a 3 semanas",
        materials: "Papel, cartón, juntas y materiales variados.",
        note: "Alto coste de producción y alta competencia con productos existentes, lo que puede llevar a una baja eficiencia.",
        score: "3/5",
        members: []
    },
    "tarjetas": {
        title: "Tarjetas para los encargados",
        difficulty: "Baja",
        time: "1 a 2 semanas",
        materials: "Papel, cartón, madera y materiales variados.",
        note: "Proyecto inicial muy útil para aprender a trabajar en equipo, aunque no tiene recompensa económica directa.",
        score: "5/5",
        members: []
    },
    "marcapaginas": {
        title: "Marcapáginas con panel reciclado",
        difficulty: "Baja",
        time: "1 semana",
        materials: "Papel, cartón y materiales variados.",
        note: "Proyecto inicial útil para la base de otros más difíciles. El beneficio económico no es relevante, pero la utilidad es alta.",
        score: "5/5",
        members: []
    },
    "puesto-tematico": {
        title: "Puesto de venta temático",
        difficulty: "Media-Alta",
        time: "1 a 2 semanas",
        materials: "Materiales variados dependientes de la festividad (Ej: huevos de pascua).",
        note: "Uno de los mejores proyectos para recaudar fondos, con muy buenos resultados en ocasiones anteriores.",
        score: "5/5",
        members: []
    },
    "llaveros-qr": {
        title: "Llavero con código QR de cualidades",
        difficulty: "Media-Alta",
        time: "1 a 2 semanas",
        materials: "Materiales variados (impresiones, resinas, etc.).",
        note: "Idea innovadora y personalizada. Se requiere manejo de diseño y códigos QR para la producción.",
        score: "4/5",
        members: []
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('openModalBtn');
    const projectModal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close-btn');
    const timelineEvents = document.querySelectorAll('.timeline-event');
    const infoBox = document.getElementById('project-info-box');
    const infoTitle = document.getElementById('info-title');
    const infoDifficulty = document.getElementById('info-difficulty');
    const infoTime = document.getElementById('info-time');
    const infoMaterials = document.getElementById('info-materials');
    const infoNote = document.getElementById('info-note');
    const infoScore = document.getElementById('info-score');

    const backgroundContainer = document.querySelector('.background-container');

    // --- Funcionalidad de la Ventana Modal ---

    // Abre la modal
    openModalBtn.onclick = function () {
        projectModal.style.display = 'block';
        openModalBtn.style.display = 'none'; // Oculta el botón al abrir
        backgroundContainer.style.filter = 'blur(10px)'; // Aumenta el blur del fondo
    }

    // Cierra la modal
    closeBtn.onclick = function () {
        projectModal.style.display = 'none';
        openModalBtn.style.display = 'block'; // Muestra el botón al cerrar
        backgroundContainer.style.filter = 'blur(5px)'; // Reduce el blur del fondo a su estado inicial
        // Resetear la caja de información al cerrar
        resetInfoBox();
        // Quitar la clase 'active' de todos los eventos
        timelineEvents.forEach(event => event.classList.remove('active'));
    }

    // Cierra la modal si se hace clic fuera del contenido de la ventana
    window.onclick = function (event) {
        if (event.target == projectModal) {
            projectModal.style.display = 'none';
            openModalBtn.style.display = 'block';
            backgroundContainer.style.filter = 'blur(5px)';
            resetInfoBox();
            timelineEvents.forEach(event => event.classList.remove('active'));
        }
    }

    // Función para resetear la caja de información
    function resetInfoBox() {
        infoTitle.textContent = "Haz clic en un proyecto para ver los detalles.";
        infoDifficulty.textContent = "Dificultad:";
        infoTime.textContent = "Tiempo de implementación:";
        infoMaterials.textContent = "Materiales:";
        infoNote.textContent = "Nota:";
        infoScore.textContent = "Puntuación final:";
    }


    // --- Funcionalidad de la Línea de Tiempo Interactiva ---

    timelineEvents.forEach(event => {
        event.addEventListener('click', () => {
            const projectId = event.getAttribute('data-project');
            const data = projectData[projectId];
            const date = event.getAttribute('data-date');

            // Quitar clase activa de todos
            timelineEvents.forEach(e => e.classList.remove('active'));
            // Añadir clase activa al evento pulsado
            event.classList.add('active');

            // Aplicar efecto de movimiento a la caja de información
            infoBox.style.opacity = '0';
            infoBox.style.transform = 'translateY(10px)';

            setTimeout(() => {
                // Actualizar el contenido
                infoTitle.textContent = `${data.title} (${date})`;
                infoDifficulty.textContent = `Dificultad: ${data.difficulty}`;
                infoTime.textContent = `Tiempo de implementación: ${data.time}`;
                infoMaterials.textContent = `Materiales: ${data.materials}`;
                infoNote.textContent = `Nota: ${data.note}`;
                infoScore.textContent = `Puntuación final: ${data.score}`;

                // Mostrar con efecto de reaparición
                infoBox.style.opacity = '1';
                infoBox.style.transform = 'translateY(0)';
            }, 300); // 300ms para el efecto de transición
        });
    });
});