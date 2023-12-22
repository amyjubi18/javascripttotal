function mostrarResultado(campoResultado){
    document.getElementById("campoResultado").value = campoResultado;
}
function suma(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1 + numero2);
}
function resta(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1 - numero2);
}
function multiplicar(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1 * numero2);
}
function dividir(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1 / numero2);
}
function raiz(){
    let numero = +document.getElementById("campo1").value;
    mostrarResultado(Math.sqrt(numero));
}
function potencia(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(Math.pow(numero1, numero2));
}
function absoluto(){
    let numero = +document.getElementById("campo1").value;
    mostrarResultado(Math.abs(numero));
}
function aleatorio(){
    let minimo = +document.getElementById("campo1").value;
    let maximo = +document.getElementById("campo2").value;
    maximo = maximo + 1;
    mostrarResultado(Math.floor(Math.random() * (maximo - minimo)+ minimo));
}
function round(){
    let campoResultado = +document.getElementById("campoResultado").value;
    mostrarResultado(Math.round(campoResultado));

}
function floor(){
    let campoResultado = +document.getElementById("campoResultado").value;
    mostrarResultado(Math.floor(campoResultado));

}
function ceil(){
    let campoResultado = +document.getElementById("campoResultado").value;
    mostrarResultado(Math.ceil(campoResultado));

}
