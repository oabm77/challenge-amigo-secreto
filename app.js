// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Crear un array para almacenar los nombres
let amigos = [];
// Obtener el elemento de la lista
const lista = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

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
        // Actualiza la lista de amigos
        actualizarLista();
    }
    return false;
}

function actualizarLista() {
    // Limpiar la lista existente
    lista.innerHTML = "";
    // Iterar sobre el arreglo
    for (amigo of amigos) {
        // Crear elementos de lista <li></li>
        let li = document.createElement("li");
        li.innerHTML = amigo;
        // Agregar elementos a la lista
        lista.appendChild(li);
    }
    return false;
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length > 0) {
        // Generar un índice aleatorio
        const seleccionado = Math.floor(Math.random() * amigos.length)
        // Obtener el nombre sorteado
        const nombre = amigos[seleccionado];
        // Mostrar el resultado
        resultado.innerHTML = nombre;
    }
}