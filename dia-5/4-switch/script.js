function consultarPrecio(){
    let elementoRespuesta = document.getElementById("textoPrecio");
    let elementoFruta = document.getElementById("numeroFruta");
    let fruta = elementoFruta.value;

    switch(fruta){
        case "1":
            elementoRespuesta.textContent = "$845";
            break;
            case "2":
            elementoRespuesta.textContent = "$632";
            break;
            case "3":
            elementoRespuesta.textContent = "$484";
            break;
            case "4":
            elementoRespuesta.textContent = "$921";
            break;
            case "5":
            elementoRespuesta.textContent = "$381";
            break;
    }
}