  $.get('http:api.openweathermap.org/data/2.5/weather?q=Ankara&APPID=adc11990dcb685cf8bc8534db4a8c605', function(data) {
    var sicaklik = data.main.temp;
    sicaklik = Math.round(sicaklik - 273.15);
    document.querySelector("#göster").innerHTML = sicaklik + "° C";
  })

  $(document).ready(function() {
    {
      $.get("https://gist.githubusercontent.com/serong/9b25594a7b9d85d3c7f7/raw/9904724fdf669ad68c07ab79af84d3a881ff8859/iller.json",
        function(data) {
          const jsonData = JSON.parse(data)
          const values = Object.values(jsonData)
          for (let i = 0; i < values.length; i++) {
            document.querySelector("#liste").innerHTML +=

              "<option>" + values[i] + "</option>"


          }
        })
    }
  });
  $(document).on("click", "#buton", function() {
    var göster = $("#liste").val();
    $.get(`http:api.openweathermap.org/data/2.5/weather?q=${göster}&APPID=adc11990dcb685cf8bc8534db4a8c605`,
      function(data) {
        var sicaklik = data.main.temp;
        sicaklik = Math.round(sicaklik - 273.15);
        document.querySelector("#göster2").innerHTML = göster + ": " + sicaklik + "° C";
        sicaklik + "° C";

      })
  })