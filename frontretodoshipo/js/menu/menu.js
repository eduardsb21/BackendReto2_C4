/**
 * Este evento de JQuery se ejecuta cuando se termina de cargar la libreria
 */
 $(document).ready(function () {
    estadoInicial();

    $("#cerrarSession").click(function(){
        cerarSession();    
    });

});


/**
 * Estado inicial de la pagina, valida si el usuario se encuentra autenticado en la aplicaciòn
 */
 function estadoInicial() {

    infoUsuario();
    
}

function cerarSession(){
    sessionStorage.removeItem("user");
    location.href="index.html"
}