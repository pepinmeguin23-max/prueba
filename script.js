const boton = document.getElementById("saludoButton");
const mensaje = document.getElementById("mensaje");

function mostrarSaludo() {
    mensaje.textContent = "¡Hola mundo!";
}

boton.addEventListener("click", mostrarSaludo);