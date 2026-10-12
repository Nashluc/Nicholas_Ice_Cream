// Imágenes que aparecerán en el carrusel
const imagenes = [
    "Imagen/Fresa.png",
    "Imagen/Chocolate.png",
    "Imagen/Vainilla.png"
];

// Comenzamos con la primera imagen
let indiceActual = 0;

// Elementos del carrusel
const imagenCarrusel = document.getElementById("imagenCarrusel");
const botonAnterior = document.getElementById("botonAnterior");
const botonSiguiente = document.getElementById("botonSiguiente");

if (imagenCarrusel && botonAnterior && botonSiguiente) {

// Botón para ir a la siguiente imagen
botonSiguiente.addEventListener("click", function () {

    indiceActual++;

    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }

    imagenCarrusel.src = imagenes[indiceActual];
});

// Botón para regresar a la imagen anterior
botonAnterior.addEventListener("click", function () {

    indiceActual--;

    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    }

    imagenCarrusel.src = imagenes[indiceActual];
});
}

// Validación del formulario de contacto
const formularioContacto = document.getElementById("formularioContacto");

if (formularioContacto) {

    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const mensaje = document.getElementById("mensaje");

    const errorNombre = document.getElementById("errorNombre");
    const errorCorreo = document.getElementById("errorCorreo");
    const errorMensaje = document.getElementById("errorMensaje");
    const mensajeExito = document.getElementById("mensajeExito");

    // Validar nombre mientras el usuario escribe
    nombre.addEventListener("input", function () {

        if (nombre.value.trim() === "") {
            errorNombre.textContent = "El nombre es obligatorio.";
        } else {
            errorNombre.textContent = "";
        }

    });

    // Validar correo mientras el usuario escribe
    correo.addEventListener("input", function () {

        const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (correo.value.trim() === "") {
            errorCorreo.textContent = "El correo es obligatorio.";
        } else if (!patronCorreo.test(correo.value)) {
            errorCorreo.textContent = "Escribe un correo válido.";
        } else {
            errorCorreo.textContent = "";
        }

    });

    // Validar mensaje mientras el usuario escribe
    mensaje.addEventListener("input", function () {

        if (mensaje.value.trim() === "") {
            errorMensaje.textContent = "El mensaje es obligatorio.";
        } else {
            errorMensaje.textContent = "";
        }

    });

    // Validar todo al enviar
    formularioContacto.addEventListener("submit", function (evento) {

        evento.preventDefault();

        if (
            nombre.value.trim() !== "" &&
            correo.value.trim() !== "" &&
            mensaje.value.trim() !== ""
        ) {

            mensajeExito.textContent =
                "¡Mensaje enviado correctamente! 🍦💕";

            formularioContacto.reset();

        } else {

            mensajeExito.textContent =
                "Por favor, completa todos los campos.";

        }

    });
}

// Validación del formulario de reservaciones

const formularioReserva = document.getElementById("formularioReserva");

if (formularioReserva) {

    formularioReserva.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const nombre = document.getElementById("nombreReserva");
        const correo = document.getElementById("correoReserva");
        const fecha = document.getElementById("fechaReserva");
        const personas = document.getElementById("personasReserva");
        const tipo = document.getElementById("tipoReserva");

        if (
            nombre.value.trim() === "" ||
            correo.value.trim() === "" ||
            fecha.value === "" ||
            personas.value === "" ||
            tipo.value === "Selecciona una opción"
        ) {
            alert("Por favor, completa todos los campos obligatorios.");
            return;
        }

        alert("¡Reservación enviada correctamente! 🍦💕");

        formularioReserva.reset();
    });
}