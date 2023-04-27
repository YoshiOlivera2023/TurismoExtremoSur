function getTiempo(){
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      let clima = JSON.parse(this.responseText);
      let fila1 = clima.hourly.time;
      let fila3 = clima.hourly.temperature_2m;
      let celcius = clima.hourly_units.temperature_2m;
      console.log("Este es el resultado de la consulta en la API: ");
      console.log(clima);
      let contenidoTabla = document.getElementById("tabla");

      for(let i = 12; i < fila1.length; i+=24){
          let fila = contenidoTabla.insertRow();
          let columna1 = fila.insertCell();
          let columna2 = fila.insertCell();
          let columna3 = fila.insertCell()
          columna1.innerHTML = convertirFecha(fila1[i]);
          columna2.innerHTML = convertirHora(fila1[i]);
          columna3.innerHTML = fila3[i]+celcius;
      }
    }
  }
  xhttp.open("GET","https://api.open-meteo.com/v1/forecast?latitude=-53.15&longitude=-70.91&hourly=temperature_2m&temperature_2m",true);
  xhttp.send();

  function convertirFecha(fechaIngresada){
    var fecha = new Date(fechaIngresada);
    var formato = { day: 'numeric', month: 'long', year: 'numeric' };
    var fechaFormateada = fecha.toLocaleDateString('es-ES', formato);
    return fechaFormateada;
  }

  function convertirHora(fechaIngresada){
    var fecha = new Date(fechaIngresada);
    var formato = {hour: 'numeric', minute: 'numeric', hour12: true};
    var horaFormateada = fecha.toLocaleTimeString('en-US', formato);
    return horaFormateada;
  }

}

// //viernes 28 la entrega 
// //https://restcountries.com/v3.1/alpha/cl



  