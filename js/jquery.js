$(document).ready(function(){
    $("#enviar").prop("disabled",true);
    $("#validarForm").submit(function(event){

        event.preventDefault();

        let rut = $("#rut").val();
        let nombres = mayusculaPrimeraLetra($("#nombres").val());
        let apPaterno = mayusculaPrimeraLetra($("#apPaterno").val());
        let apMaterno = mayusculaPrimeraLetra($("#apMaterno").val());
        let codTel = $("#codTel").val();
        let telefono = $("#telefono").val();
        let correo = $("#correo").val().toLowerCase();
        let direccion = $("#direccion").val();
        let region = $("#region").val();
        let provincia = $("#provincia").val();
        let comuna = $("#comuna").val();
        let mensaje = $("#mensaje").val();

        // console.log(rut);
        // console.log(nombres);
        // console.log(apPaterno);
        // console.log(apMaterno);
        // console.log(codTel);
        // console.log(telefono);
        // console.log(correo);
        // console.log(direccion);
        // console.log(region);
        // console.log(provincia);
        // console.log(comuna);
        // console.log(mensaje);

        let val = true;

        //Validación de RUT
        if(rut.length < 9 || rut.length > 10){
            $("#mrut").html("El rut debe contener entre 9 y 10 digitos.");
            val = false;
        }
        else{
            $("#mrut").html("");
        }

        //Validación de nombre
        if(nombres.length < 3 || nombres.length > 20){
            $("#mnombre").html("El nombre debe contener entre 3 y 20 caracteres.");
            val = false;
        }
        else{
            $("#mnombre").html("");
        }

        //Validación de apellido paterno
        if(apPaterno.length < 3 || apPaterno.length > 20){
            $("#mapPaterno").html("El apellido paterno debe contener entre 3 y 20 caracteres.");
            val = false;
        }
        else{
            $("#mapPaterno").html("");
        }

        //Validación de apellido materno
        if(apMaterno.length < 3 || apMaterno.length > 20){
            $("#mapMaterno").html("El apellido materno debe contener entre 3 y 20 caracteres.");
            val = false;
        }
        else{
            $("#mapMaterno").html("");
        }

        //Validación de codigo de telefono
        if(codTel == "Código"){
            $("#mcodTel").html("Debe seleccionar un código.");
            val = false;   
        }
        else{
            $("#mcodTel").html("");
        }

        //Validación de telefono
        if(telefono.length < 9){
            $("#mcelular").html("El número de celular debe contener entre 9 y 12 dígitos.");
            val = false;
        }
        else{
            $("#mcelular").html("");
        }

        //Validación de email
        if(correo.length <= 0){
            $("#memail").html("Debe ingresar la dirección de correo eléctronico.");
            val = false;
        }
        else{
            $("#memail").html("");
        }

        //Validación de Región
        if(region === "— Seleccione una región —"){
            $("#mregion").html("Debe seleccionar una región.");
            val = false;
        }
        else {
            $("#mregion").html("");
        }

        //Validación de Provincia
        if(region === "— Seleccione una provincia —"){
            $("#mprovincia").html("Debe seleccionar una provincia.");
            val = false;
        }
        else {
            $("#mprovincia").html("");
        }

        //Validación de Comuna
        if(region === "— Seleccione una comuna —"){
            $("#mcomuna").html("Debe seleccionar una comuna.");
            val = false;
        }
        else {
            $("#mcomuna").html("");
        }

        //Validación de nombre
        if(mensaje.length == 0){
            $("#mmensaje").html("Debe escribir un mensaje.");
            val = false;
        }
        else{
            $("#mmensaje").html("");
        }

        if(val == true){
            $("#enviar").prop("disabled",false);
            
            let solicitud = 
            nombres + " " + apPaterno + " " + apMaterno + "<br>"+
            "Su solicitud de contacto ha sido enviado exitosamente. <br>"+
            "Será contactado al correo " + correo + " concerniente nuestros servicios. <br><br>"+
            "Gracias por preferir Turismo Extremo Sur.";
            alert(solicitud);
            
            $("#solicitudEnviada").html(solicitud)

            event.preventDefault();
        }
        else{
            $("#enviar").prop("disabled",true);
        }
    })
    function mayusculaPrimeraLetra(palabraIngresada) {
        var palabras = palabraIngresada.split(" ");
        for (var i = 0; i < palabras.length; i++) {
            var palabra = palabras[i];
            var primeraLetra = palabra.charAt(0).toUpperCase();
            var restoPalabra = palabra.substring(1).toLowerCase();
            palabras[i] = primeraLetra + restoPalabra;
        }
        var resultado = palabras.join(" ");
        return resultado;
      }

})