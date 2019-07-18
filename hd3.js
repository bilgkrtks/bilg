$.get('http:api.openweathermap.org/data/2.5/weather?q=Ankara&APPID=adc11990dcb685cf8bc8534db4a8c605', function(data) {
  var sicaklik = data.main.temp;
  sicaklik = Math.round(sicaklik - 273.15);
  document.querySelector("#göster").innerHTML = sicaklik + "° C";
})

$(document).on("click", "#buton2", function() {
  var sehir = $("#sec").val();
  $.post(`http:api.openweathermap.org/data/2.5/weather?q=${sehir}&APPID=adc11990dcb685cf8bc8534db4a8c605`,
    function(data) {
      var sicaklik2 = data.main.temp;
      sicaklik2 = Math.round(sicaklik2 - 273.15);
      document.querySelector("#göster2").innerHTML = sehir + ": " + sicaklik2 + "° C";
    })
})