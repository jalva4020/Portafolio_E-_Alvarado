
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
    