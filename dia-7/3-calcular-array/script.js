function extraerNumeroDesdeElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto =  miElemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}

function calcular(){
    let ventas =[];

    ventas[0] = extraerNumeroDesdeElemento("ventasTienda1");
    ventas[1] = extraerNumeroDesdeElemento("ventasTienda2");
    ventas[2] = extraerNumeroDesdeElemento("ventasTienda3");
    ventas[3] = extraerNumeroDesdeElemento("ventasTienda4");
    ventas[4]= extraerNumeroDesdeElemento("ventasTienda5");
    ventas[5]= extraerNumeroDesdeElemento("ventasTienda6");

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