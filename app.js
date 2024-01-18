// Asignación de variables 

let numeroSecreto = 0;
let numeroMaximo = 10;
let intentos = 1; 
let numerosSorteados = [];

// Función para asignar un texto a un elemento

function asignarTextoElemento(elemento, texto) {
    const elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Función para verificar si el usuario acierta o no

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `¡Acertaste el número en ${intentos} ${intentos == 1 ? "intento" : "intentos"}!`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }

    else {
        if (numeroDeUsuario > numeroSecreto) asignarTextoElemento("p", "El número es menor");
        else asignarTextoElemento("p", "El número es mayor");
        intentos++;
        limpiarInput();
    }

    return;
}

// Función para los mensajes iniciales 

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", "Ingresa un número del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    return;
}

// Función para reiniciar el juego 

function reinicioJuego() {
    limpiarInput();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled", true);
    return;
}

// Función para limpiar el input 

function limpiarInput() {
    document.getElementById("valorUsuario").value = "";
    return;
}

// Función para generar un número aleatorio

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (numerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles. ¡Gracias por jugar!");
        document.getElementById("valorUsuario").setAttribute("disabled", true);
        document.getElementById("intento").setAttribute("disabled", false);
    } else {
        if (numerosSorteados.includes(numeroGenerado)) return generarNumeroSecreto();
        else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

// Llamada de función

condicionesIniciales();