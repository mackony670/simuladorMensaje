// varaiables del dom
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');
// funciones
function inicioApp() {
    btnEnviar.disabled = true;
}
function validarEmail(campo) {
    let mensaje = campo.value;
    if (mensaje.indexOf('@') !== -1 && mensaje.indexOf('.') !== -1) {

        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error')
    } else {

        campo.style.borderBottomColor = 'red';
        campo.classList.remove('error')
    }
}

function validarCampo() {
    let error = document.querySelectorAll('.error')
    validarLongitud(this);

    if (this.type == 'email') {
        validarEmail(this)
    }
    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if (error.length === 0) {
            btnEnviar.disabled = false;
        }
    } else {
        btnEnviar.disabled = true;
    }
}
function validarLongitud(campo) {
    if (campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error')
    } else {

        campo.style.borderBottomColor = 'red';
        campo.classList.add('error')
    }
}
function enviarEmail(e) {
    const spinerGif = document.getElementById('spinner');
    spinerGif.style.display = 'block';

    // gift que envia el email
    const enviado = document.createElement('img')
    enviado.src = './img/mail.gif'
    enviado.style.display = 'block';

    //ocultar spinner y mostrar el enviado 
    setTimeout(function () {
        spinerGif.style.display = 'none';

        document.getElementById('loaders').appendChild(enviado);
        setTimeout(function () {
            enviado.remove();
            formularioEnviar.reset();
        }, 4000)

    }, 2000);

    e.preventDefault();
}
// Listeners

function eventListeners() {
    // al iniciar la app desHabilitar el submit 
    document.addEventListener('DOMContentLoaded', inicioApp);

    //validar que el formulario tenga algo escrito
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    // resetear el formulario
    formularioEnviar.addEventListener('submit', enviarEmail);

    // resetear el formulario
    resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        formularioEnviar.reset();
        btnEnviar.disabled = true;
    });
}
eventListeners()