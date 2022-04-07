
const map =  document.getElementById("map");





var initMap = function() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 39.529, lng: -119.813 },
        zoom: 9,
        mapId: 'f1ab8840b0fb57c8'
    });

}

window.onload = initMap();