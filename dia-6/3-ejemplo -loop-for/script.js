function multiplicar(){
    //obtener el numero
    let elementoTextoTable = document.getElementById("textoTabla");
    let textoNumeroTabla= elementoTextoTable.value;
    let numeroTabla = Number(textoNumeroTabla);

    //obtener la tabla
    let elementoTablaMultiplicar = document.getElementById("listaTabla");

    //producir y mostrar resultados

    for(x = 1; x <= 10; x++){
        //calcular el resultado
        let numeroResultado = numeroTabla * x;

        //armar string con resultado
        let textoResultado = numeroTabla + " por " + x + " es igual a " + numeroResultado;

        //crear un elemento de la lista
        let itemLista = document.createElement("li");
        itemLista.innerText = textoResultado;
        elementoTablaMultiplicar.appendChild(itemLista);
    }

}