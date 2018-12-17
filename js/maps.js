var mymap = L.map('mapid').setView([47.735367, 2.724609], 5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZWxjb2Nvem9va2E1IiwiYSI6ImNqcG54cjlkMDAyNWg0M2xuamVuNGdqbjYifQ.fY-_P0-klixx4xyLQlttRg', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("La position de votre clic est " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);