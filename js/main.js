function getLocation() {
  var x = document.getElementById("demo");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var x = document.getElementById("demo");
  x.innerHTML = "Latitude: <br>" + position.coords.latitude +
    "<br><br>Longitude: <br>" + position.coords.longitude;
}