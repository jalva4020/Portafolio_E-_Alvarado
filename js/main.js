
document.addEventListener('DOMContentLoaded', () => {
    const btntema = document.getElementById('btn-tema');
    const body = document.body;

    if (!btntema) {
        console.error('No se encontró el botón con id "btn-tema"');
        return;
    }

    const aplicarTema = (esOscuro) => {
        body.classList.toggle('dark-theme', esOscuro);
        btntema.textContent = esOscuro ? '☀️' : '🌙';
        localStorage.setItem('tema', esOscuro ? 'Oscuro' : 'Claro');
    };

    const temaGuardado = localStorage.getItem('tema');
    aplicarTema(temaGuardado === 'Oscuro');

    btntema.addEventListener('click', () => {
        const esOscuro = !body.classList.contains('dark-theme');
        aplicarTema(esOscuro);
    });
});

// =========================================
    // MENÚ HAMBURGUESA
    // =========================================
    const btnMenu = document.getElementById('btn-menu');
    const menuNav = document.querySelector('.navbar ul');

    // Validamos que ambos elementos existan para evitar errores
    if (btnMenu && menuNav) {
        btnMenu.addEventListener('click', () => {
            // Alterna la clase que creamos en CSS para mostrar/ocultar
            menuNav.classList.toggle('menu-activo');
        });
    }
    
    /* ==========================================
   VALIDACIÓN DEL FORMULARIO DE CONTACTO
   ========================================== */
const formulario = document.getElementById('formulario-contacto');

if (formulario) {
    formulario.addEventListener('submit', function(evento) {
        // 1. Evita que la página se recargue al instante
        evento.preventDefault(); 

        // 2. Obtener los valores de los campos eliminando espacios en blanco al inicio y final
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        // 3. Expresión regular para verificar que sea un formato de correo real
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // 4. Validaciones
        if (nombre === '') {
            alert('Por favor, ingresa tu nombre completo.');
            return; // Detiene la ejecución si hay error
        }

        if (correo === '' || !regexCorreo.test(correo)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        if (mensaje === '') {
            alert('Por favor, escribe tu mensaje antes de enviar.');
            return;
        }

        // 5. Si pasa todas las validaciones
        alert('¡Gracias, ' + nombre + '! Tu mensaje se ha validado correctamente.');
        formulario.reset(); // Limpia los campos del formulario
    });
}