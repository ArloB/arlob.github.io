$(".weather").hide();
$(".infobox").hide();
var toggle = true;
var button = document.getElementById(".toggle");
var test;
var temp;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $.ajax({
      url:
        "https://fcc-weather-api.glitch.me/api/current?lat=" +
        position.coords.latitude +
        "&lon=" +
        position.coords.longitude,
      success: function(data) {
        $(".infobox").show();
        $(".info").text(data.weather[0].description);
        $(".data").text(data.weather[0].main);
        changeIcon(data.weather[0].id);
        $(".temp").text(Math.round(data.main.temp) + "°");
        $(".location").text(data.name + ", " + data.sys.country);
        $(".CF").text("C");
        test = data;
        temp = data.main.temp;
      },
      cache: false
    });
  });
}
function changeIcon(type) {
  var thunderstorm = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232];
  var drizzle = [300, 301, 302, 310, 311, 312, 313, 314, 321];
  var rain = [500, 501, 502, 503, 504, 511, 520, 521, 522, 531];
  var snow = [600, 601, 602, 611, 612, 615, 616, 620, 621, 622];
  var clear = 800;
  var clouds = [
    801,
    802,
    803,
    804,
    701,
    711,
    721,
    731,
    741,
    751,
    761,
    762,
    771,
    781
  ];
  var extreme = [900, 901, 902, 903, 904, 905, 906];
  $(".weather").hide();
  if (thunderstorm.indexOf(type) !== -1) {
    $(".thunder-storm").show();
  } else if (drizzle.indexOf(type) !== -1) {
    $(".sun-shower").show();
  } else if (rain.indexOf(type) !== -1) {
    $(".raining").show();
  } else if (snow.indexOf(type) !== -1) {
    $(".snowing").show();
  } else if (clouds.indexOf(type) !== -1) {
    $(".cloudy").show();
  } else if (clear == type) {
    $(".sunny").show();
  } else {
    $(".unknown").show();
  }
}

function changeTemp() {
  if (toggle) {
    temp = Math.round(temp * 1.8 + 32);
    $(".temp").text(temp + "°");
    $(".CF").text("F");
    toggle = false;
  } else {
    temp = Math.round((temp - 32) / 1.8);
    $(".temp").text(temp + "°");
    $(".CF").text("C");
    toggle = true;
  }
}