//import { validaesVacio, ValidateEmail } from "../util/util";
//import { estadoInicialListarUsu, listarUsu } from "./listarusuarios";

/**
 * Configura el aspecto de la página para ingresar un nuevo registro
 */
function activaNuevo() {
    $("#nuevo").show(500);
    $("#identification").focus();
    $("#editar").hide();
    $("#nuevoRegistro").hide(500)
    $("#listado").hide(500);
    $("#availability option[value=true]").attr("selected",true);
}

/**
 * Esta función ejecuta la petición asincrona al servidor, envia una
 * petición al ws de tipo POST para insertar un producto
 */
function registrarUsuario() {

    let birthday= $("#birthtDay").val();
    let position = birthday.indexOf("-");
    let monthBirthtDay = birthday.substring(position+1,position+3)
    
    //crea un objeto javascript
    let datosUsu = {
        id : $("#id").val(),
        identification: $("#identification").val(),
        name: $("#name").val(),
        birthtDay: $("#birthtDay").val(),
        monthBirthtDay:monthBirthtDay,
        address: $("#address").val(),
        cellPhone: $("#cellPhone").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        zone: $("#zone").val(),
        type: $("#type").val()
    }

    if (validarUsu()) {

        //convierte el objeto javascript a json antes de agregarlo a los datosUsu de la petición
        let PeticionUsu = JSON.stringify(datosUsu);

        $.ajax({
            method: "POST",
            // la URL para la petición (url: "url al recurso o endpoint")
            url: "http://localhost:8085/api/user/new",
            // la información a enviar
            // (también es posible utilizar una cadena de datosUsu)
            //si el metodo del servicio recibe datosUsu, es necesario definir el parametro adicional
            data: PeticionUsu,
            dataType: 'json',
            // especifica el tipo de petición http: POST, GET, PUT, DELETE

            contentType: "application/JSON",

            // el tipo de información que se espera de respuesta
            //dataType: 'json',

            // código a ejecutar si la petición es satisfactoria;
            // la respuesta es pasada como argumento a la función
            complete: function (respuesta) {
                //escribe en la consola del desarrollador para efectos de depuración
                console.log(respuesta.status);
                Swal.fire('Registro ingresado correctamente...');
             
                listarUsu();
                estadoInicialListarUsu();
                
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

function validarUsu(){
    //obtiene valores
    let identification = $("#identification").val();
    let name =  $("#name").val();
    let birthtDay = $("#birthtDay").val();
    let monthBirthtDay = $("#monthBirthtDay").val();
    let address = $("#address").val();
    let cellPhone = $("#cellPhone").val();
    let email = $("#email").val();
    let password = $("#password").val();
    let zone = $("#zone").val();
    let type = $("#type").val();


    
    $("#alerta").hide();
    $("#mensaje").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(identification)) {
        $("#mensaje").html("Debe ingresar la identificación...");
        $("#alerta").show(500);
        $("#identification").focus();
        return false;
    }else if( validaesVacio(name)) {
        $("#mensaje").html("Debe ingresar el nombre...");
        $("#alerta").show(500);
        $("#name").focus();
        return false;
    }else if( validaesVacio(cellPhone)) { 
        $("#mensaje").html("Debe ingresar el telefono...");
        $("#alerta").show(500);
        $("#cellPhone").focus();
        return false;
    }else if( validaesVacio(birthtDay)) { 
        $("#mensaje").html("Debe seleccionar la fecha de cumpleaños...");
        $("#alerta").show(500);
        $("#birthtDay").focus();
        return false;
    }else if( validaesVacio(email)) { 
        $("#mensaje").html("Debe ingresar el email...");
        $("#alerta").show(500);
        $("#email").focus();
        return false;
   }else if (!ValidateEmail(email)) {
        $("#mensaje").html("Debe ingresar un correo electrónico valido");
        $("#alerta").show(500);
        $("#email").focus();
        return false;
    }else if( validaesVacio(password)) {
        $("#mensaje").html("Debe ingresar el password...");
        $("#alerta").show(500);
        $("#password").focus();
        return false;
    }else if( validaesVacio(address)) { 
        $("#mensaje").html("Debe ingresar la dirección...");
        $("#alerta").show(500);
        $("#address").focus();
        return false;
    }else if( validaesVacio(zone)) { 
        $("#mensaje").html("Debe ingresar la zona...");
        $("#alerta").show(500);
        $("#zone").focus();
        return false;
    }else if( validaesVacio(type)) { 
        $("#mensaje").html("Debe seleccionar el tipo...");
        $("#alerta").show(500);
        $("#type").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }
}