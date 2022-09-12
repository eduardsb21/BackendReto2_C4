const errores = document.getElementsByClassName("err");
/**
 * Configura el aspecto de la página para ingresar un nuevo registro
 */
function activaNuevo() {
    $("#nuevo").show(500);
    $("#editar").hide();
    $("#nuevoRegistro").hide(500)
    $("#listado").hide(500);

    const errores = document.getElementsByClassName("err");

    errores[0].style.display = "none";
    errores[1].style.display = "none";
    errores[2].style.display = "none";
    errores[3].style.display = "none";
    errores[4].style.display = "none";
    errores[5].style.display = "none";
    errores[6].style.display = "none";
    errores[7].style.display = "none";
    errores[8].style.display = "none";
    $("#inputReference").focus();
}

/**
 * Esta función ejecuta la petición asincrona al servidor, envia una
 * petición al ws de tipo POST para insertar un producto
 */
function registrar() {

    //crea un objeto javascript
    let datos = {
        reference: $("#inputReference").val(),
        brand: $("#inputBrand").val(),
        category: $("#inputCategory").val(),
        objetivo: $("#inputObjetive").val(),
        description: $("#inputDescription").val(),
        availability: $("#inputAvailability").val(),
        price: $("#inputPrice").val(),
        quantity: $("#inputQuantity").val(),
        photography: $("#inputImage").val()
    }

    if (validar()) {

        //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
        let datosPeticion = JSON.stringify(datos);

        $.ajax({
            // la URL para la petición (url: "url al recurso o endpoint")
            url: "http://localhost:8081/api/supplements/new",
            // la información a enviar
            // (también es posible utilizar una cadena de datos)
            //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
            data: datosPeticion,

            // especifica el tipo de petición http: POST, GET, PUT, DELETE
            type: 'POST',

            contentType: "application/JSON",

            // el tipo de información que se espera de respuesta
            //dataType: 'json',

            // código a ejecutar si la petición es satisfactoria;
            // la respuesta es pasada como argumento a la función
            success: function (respuesta) {
                //escribe en la consola del desarrollador para efectos de depuración
                console.table(respuesta);
                $("#mensajes").show(1000);
                $("#mensajes").html("Registro ingresado...");
                $("#mensajes").hide(1000);
                listar();
                estadoInicial();
            },

            // código a ejecutar si la petición falla;
            // son pasados como argumentos a la función
            // el objeto de la petición en crudo y código de estatus de la petición
            error: function (xhr, status) {
                $("#mensajes").show(1000);
                $("#mensajes").html("Error peticion POST..." + status);
            }
        });
    }
}

function validar() {

    //obtiene valores
    let reference = $("#inputReference").val();
    let brand =  $("#inputBrand").val();
    let category =  $("#inputCategory").val();
    let objetivo = $("#inputObjetive").val();
    let description= $("#inputDescription").val();
    let availability = $("#inputAvailability").val();
    let price = $("#inputPrice").val();
    let quantity= $("#inputQuantity").val();
    let photography= $("#inputImage").val();
    
    //valida que los campos no sean vacios
    if (validaesVacio(reference)) {
        errores[0].style.display = "block";
        $("#inputReference").focus();
        return false;
    } else if (validaesVacio(brand)) {
        errores[1].style.display = "block";
        $("#inputBrand").focus();
        return false;
    } else if (validaesVacio(category)) {
        errores[2].style.display = "block";
        $("#inputCategory").focus();
        return false;
    } else if (validaesVacio(objetivo)) {
        errores[3].style.display = "block";
        $("#inputObjetive").focus();
        return false;
    } else if (validaesVacio(description)) {
        errores[4].style.display = "block";
        $("#inputDescription").focus();
        return false;
    } else if (validaesVacio(availability)) {
        errores[5].style.display = "block";
        $("#inputAvailability").focus();
        return false;
    } else if (validaesVacio(price)) {
        errores[6].style.display = "block";
        $("#inputPrice").focus();
        return false;
    } else if (validaesVacio(quantity)) {
        errores[7].style.display = "block";
        $("#inputQuantity").focus();
        return false;
    } else if (validaesVacio(photography)) {
        errores[8].style.display = "block";
        $("#inputImage").focus();
        return false;
    }

    return true;
}


//eventos clic sobre los campos para ocultar los mensajes de error
$("#inputReference").click(function () {
    errores[0].style.display = "none";
});
//eventos clic sobre los campos para ocultar los mensajes de error
$("#inputBrand").click(function () {
    errores[1].style.display = "none";
});
//eventos clic sobre los campos para ocultar los mensajes de error
$("#inputinputCategoryEmail").click(function () {
    errores[2].style.display = "none";
});
//eventos clic sobre los campos para ocultar los mensajes de error
$("#inputObjetive").click(function () {
    errores[3].style.display = "none";
});
//eventos clic sobre los campos para ocultar los mensajes de error
$("#inputDescription").click(function () {
    errores[4].style.display = "none";
});
//eventos clic sobre los campos para ocultar los mensajes de error
$("#inputAvailability").click(function () {
    errores[5].style.display = "none";
});
//eventos clic sobre los campos para ocultar los mensajes de error
$("#inputPrice").click(function () {
    errores[6].style.display = "none";
});
//eventos clic sobre los campos para ocultar los mensajes de error
$("#inputQuantity").click(function () {
    errores[7].style.display = "none";
});
//eventos clic sobre los campos para ocultar los mensajes de error
$("#inputImage").click(function () {
    errores[8].style.display = "none";
});