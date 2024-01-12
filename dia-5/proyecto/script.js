function recomendar(genero){
    let edad = document.getElementById("edad").value;
    let recomendacion = document.getElementById("recomendacion");
    switch(genero){
        case 'drama':
            if (edad < 13){
                recomendacion.textContent = "Casa Blanca";
            }else{
                if(edad < 16){
                    recomendacion.textContent = "La redencion"
                }else{
                    recomendacion.textContent = "Taxi Driver";
                }
            }
        break;
        case 'comedia':
            if (edad < 13){
                recomendacion.textContent = "Viajando hacia ekl futuro";
            }else{
                if(edad < 16){
                    recomendacion.textContent = "Truman Show"
                }else{
                    recomendacion.textContent = "Wolf";
                }
            }
        break;
        case 'musical':
            if (edad < 13){
                recomendacion.textContent = "la la land";
            }else{
                if(edad < 16){
                    recomendacion.textContent = "los miserables"
                }else{
                    recomendacion.textContent = "The Rocky";
                }
            }
        break;
        case 'crimen':
            if (edad < 13){
                recomendacion.textContent = "No hay opciones para esta edad";
            }else{
                if(edad < 16){
                    recomendacion.textContent = "el secreto de tus ojos"
                }else{
                    recomendacion.textContent = "El padrino";
                }
            }
        break;
    }
}