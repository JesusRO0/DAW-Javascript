//Exportamos la funcion temporizador como pide el ejercicio.
export function temporizador(milisegundo, botoncito, capa) {

    //Cremaos la promesa.
    var promesa = new Promise(function(respuesta, accion) {

        //Creamos una funcion de que si pasa el tiempo saca el mensaje.
        let temporizador = setInterval(function() {
            respuesta("Tiemplo concluido.");

        }, milisegundo);

        //Función que si pulsamos el botón acaba instantaneo.
        botoncito.addEventListener("click", function() {
            accion("Acción iaquanterrumpida por el usuario.");
        })
    })

    //El mensaje en cuestión si se acaba el tiempo.
    promesa.then(function(respuestaTiempo) {

        capa.innerHTML = "Se acabó el tiempo...";

    });

    //Mensaje si pulsamos el botón.
    promesa.catch(function(respuestaBoton) {

        capa.innerHTML = "Acabas de parar el tiempo... (empieza a plegarse el espacio-tiempo).";

    });

}