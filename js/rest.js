$(document).ready(function () 
{ 

    var url = "http://api.weatherapi.com/v1/forecast.json?key=b50edbdcb6524dafa4a142215232804&q=Punta Arenas&days=10&aqi=no&alerts=no&lang=es";

    $.ajax({
      url: url,
      type: "GET",
      dataType: "json",
      success: function(data) {
        
        
        let city = data.location.name;
        let country = data.location.country;
        let region = data.location.region;
        let forecast = data.forecast.forecastday;

        var dias_tiempo = "";
        forecast.forEach(function(day) 
        {
          let date = day.date;
          let imgen = day.day.condition.icon;
          let temp_c = day.day.avgtemp_c;
          let condition = day.day.condition.text;


          dias_tiempo += "<div class='col' ><div class='card shadow-sm' style='width: 10rem;'><img src='http:"+imgen+"' class='card-img-top' alt='El tiempo'><div class='card-body'><h5 class='card-title'>"+date+" </h5><h3 class='card-title'>"+temp_c+" °</h3><p class='card-text'>"+condition+"</p></div></div></div>";     
        });

        let eltiempo= "<div class='text-center'><div class='card' style='text-align: center;width: 18rem;' ><img src='img/punta_arenas.jpg' class='card-img-top' alt='El tiempo'><div class='card-body'><h5 class='card-title'>"+city+"</h5><p class='card-text'>"+region+"</p></div></div></div></div></div";


        $("#laciudad").html(eltiempo);
        $("#eltiempo").html(dias_tiempo);
      },

  

  }); 
         
});