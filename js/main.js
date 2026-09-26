
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
    const nombreInput = document.getElementById('nombre');
    const correoInput = document.getElementById('correo');
    const mensajeInput = document.getElementById('mensaje');

    const mostrarError = (campo, mensaje) => {
        const errorElemento = campo.parentElement.querySelector('.error-message');

        if (errorElemento) {
            errorElemento.textContent = mensaje;
        } else {
            const elemento = document.createElement('small');
            elemento.className = 'error-message';
            elemento.style.color = '#f87171';
            elemento.style.display = 'block';
            elemento.style.marginTop = '0.35rem';
            elemento.textContent = mensaje;
            campo.parentElement.appendChild(elemento);
        }

        campo.style.borderColor = '#f87171';
    };

    const limpiarError = (campo) => {
        const errorElemento = campo.parentElement.querySelector('.error-message');
        if (errorElemento) errorElemento.remove();
        campo.style.borderColor = '#cbd5e1';
    };

    nombreInput.addEventListener('input', () => {
        if (nombreInput.value.trim().length >= 2) limpiarError(nombreInput);
    });

    correoInput.addEventListener('input', () => {
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regexCorreo.test(correoInput.value.trim())) limpiarError(correoInput);
    });

    mensajeInput.addEventListener('input', () => {
        if (mensajeInput.value.trim().length >= 10) limpiarError(mensajeInput);
    });

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nombre = nombreInput.value.trim();
        const correo = correoInput.value.trim();
        const mensaje = mensajeInput.value.trim();
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let hayError = false;

        if (nombre.length < 2) {
            mostrarError(nombreInput, 'Por favor, ingresa tu nombre completo.');
            hayError = true;
        } else {
            limpiarError(nombreInput);
        }

        if (!regexCorreo.test(correo)) {
            mostrarError(correoInput, 'Por favor, ingresa un correo electrónico válido.');
            hayError = true;
        } else {
            limpiarError(correoInput);
        }

        if (mensaje.length < 10) {
            mostrarError(mensajeInput, 'El mensaje debe tener al menos 10 caracteres.');
            hayError = true;
        } else {
            limpiarError(mensajeInput);
        }

        if (hayError) return;

        alert('¡Gracias, ' + nombre + '! Tu mensaje se ha enviado correctamente.');
        formulario.reset();
    });
}