function mostrarFecha() {
    var fechaActual = new Date();

var fechaFormateada = fechaActual.toLocaleDateString('es-ES');
alert(fechaFormateada);
}