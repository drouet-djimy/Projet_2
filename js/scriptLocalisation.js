// var id = 0;
// var coords = {
//   lat: 0,
//   long: 0
// }

function getLocation() {
  var x = document.getElementById("affichage");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = "La géolocalisation n'est pas prise en charge par ce navigateur.";
  }
}

function showPosition(position) {
  var x = document.getElementById("affichageLatitude");
  var y = document.getElementById("affichageLongitude");
  x.innerHTML = position.coords.latitude;
  y.innerHTML = position.coords.longitude;

  mymap.setView([position.coords.latitude, position.coords.longitude], 16)

  L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap)
    .bindPopup("<b>Bienvenue !</b><br />Vous êtes ici !.").openPopup();
  // coords.lat = position.coords.latitude;
  // var data = JSON.parse(coords);
  // id++;
  localStorage.setItem('Latitude', position.coords.latitude);
  localStorage.setItem('Longitude', position.coords.longitude);
  var historique = localStorage.getItem('Latitude') + localStorage.getItem('Longitude')
  document.getElementById('historique').innerHTML = historique;

}

function showError(error) {
  var x = document.getElementById("affichage");
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "Vous avez refusé la demande de géolocalisation. <br>Veillez activer votre géolocalisation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "La localisation est indisponibles."
      break;
    case error.TIMEOUT:
      x.innerHTML = "Votre demande d'emplacement a expiré."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "Une erreur inconnue est survenue."
      break;
  }
}