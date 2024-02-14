function crearTiendas(contenedorID, min,cantidadTiendas ){
    //encontrar contenedor por su id
    let elementoContenedor = document.getElementById(contenedorID);

    //loop para crear tantas tiendas como se pidan
    for(let conteoTiendas=1; conteoTiendas<=cantidadTiendas; conteoTiendas++){

        //crear el texto de label para poder llamar a la funcion
        let textoEtiqueta = "Tienda " + conteoTiendas;

        //crear tiendas con crearParrafoTienda
        let parrafoTienda = crearParrafoTienda(textoEtiqueta, min);

        //agregar el parrafo al contenedor
        elementoContenedor.appendChild(parrafoTienda);
    }
}

function crearParrafoTienda(textoLabel, valorMin){
    //crear las etiquetas <p>
    let elementoParrafo = document.createElement("p");
    // crear la etiqueta label
    let elementoEtiqueta = document.createElement("label");
    elementoEtiqueta.innerText = textoLabel + ": ";
    

    // conectar con el input
    elementoEtiqueta.setAttribute("for", textoLabel);
    
    //crear el input
    let elementoInput = document.createElement("input");

    //establecer atributos de input
    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("id", textoLabel);
    elementoInput.setAttribute("min", valorMin);
    elementoInput.setAttribute("value", 0);

    //agregar label e input al parrafo

    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);

    //devolver el parrafo completo

    return elementoParrafo;
}


function extraerNumeroDesdeElemento(elemento){
    // let miElemento = document.getElementById(elemento);
    let miTexto =  elemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}

function calcular(){
    let ventas =[];

    let posicionVentas = 0;
    let elementosVentas = document.getElementById("itemsTiendas");

    for(let item of elementosVentas.children){
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);
        ventas[posicionVentas] = valorVenta;
        posicionVentas++;
        
    }

    
    let totalVentas = sumarTotal(ventas);

    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    let mensajeSalida = "Total Ventas: " + totalVentas + " /Venta mayor: " + ventaMayor + " / Venta menor: " + ventaMenor;
    let elementoSalida = document.getElementById("parrafoSalida");

    elementoSalida.textContent = mensajeSalida;
}
function sumarTotal(array){
    let total = 0;

    for(let ventas of array){
        total = total + ventas;

        
    }
    return total;
}

function calcularMayor(array){
    let maximo = array[0];

    for(let venta of array){
        if(venta > maximo){
            maximo = venta;
        }
    }
    return maximo;
}

function calcularMenor(array){
    let minimo = array[0];

    for(let venta of array){
        if(venta < minimo){
            minimo = venta;
        }
    }
    return minimo;
}

//promedios
/* let notas = [6, 9, 7, 5, 1, 5, 4, 3];

function promedio() {
   let suma = 0;
    for (let num of notas) {
        suma += num;
    }
    console.log(suma/notas.length);
} */


/* 
function generarContenido() {
    let content = document.getElementById("contenido");
    
    let parrafo = document.createElement("p");
    parrafo.innerText = "Parrafo 1"
    
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "txtInput");
    
    content.appendChild(parrafo);
    content.appendChild(input);
    
    return content;

} */
/* function generarContenido() {
    let content = document.getElementById("contenido");
    
    let label = document.createElement("label");
    label.setAttribute("for", "txtInput");
    label.innerText = "Label 1";
    
    let input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("id", "txtInput");
    input.setAttribute("value", 0);
    
    content.appendChild(label);
    content.appendChild(input);
    
    return content;
} */
/* function generarContenido(numero) {
    let content = document.getElementById("contenido");
    
    let label = document.createElement("label");
    label.setAttribute("for", "txtInput" + numero);
    label.innerText = "Label " + numero;
    
    
    let input = document.createElement("input");
    input.setAttribute("id", "txtInput" + numero);
    input.setAttribute("type", "number");
    input.setAttribute("value", 0);
    
    content.appendChild(label);
    content.appendChild(input);
    
    return content;
} */

/* function repetirContenido(veces) {
    for(let x = 1; x <= veces; x++) {
        generarContenido(x);
    }
}
 
function generarContenido(numero) {
    let content = document.getElementById("contenido");
    
    let label = document.createElement("label");
    label.setAttribute("for", "txtInput" + numero);
    label.innerText = "Label " + numero;
    
    
    let input = document.createElement("input");
    input.setAttribute("id", "txtInput" + numero);
    input.setAttribute("type", "number");
    input.setAttribute("value", 0);
    
    content.appendChild(label);
    content.appendChild(input);
    
    return content;
} */

/* let sumaTotal = 0;
function automatizarSuma() {
    let contenedor = document.getElementById("contenido");
    
    for (let item of contenedor.children) {
        sumaTotal += Number(item.children[1].value);
    }
}
 */
