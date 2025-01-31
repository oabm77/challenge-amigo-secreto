// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Crear un array para almacenar los nombres
let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let amigo = document.getElementById("amigo").value.trim();
    // Validar la entrada
    if (amigo == "") {
        // mensaje de error
        alert("Por favor, inserte un nombre.");
    } else {
        // Actualizar el array de amigos
        amigos.push(amigo);
        // Limpiar el campo de entrada
        document.getElementById("amigo").value = "";
    }
    return false;
}