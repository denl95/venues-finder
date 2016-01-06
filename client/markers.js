addMarker = function(location, name){
    if (GoogleMaps.loaded()) {

        var marker = new google.maps.Marker({
            position: location,
            map: GoogleMaps.maps.map.instance,
            title: name
        });

        markers = markers || [];
        markers.push(marker);
    }
};

clearMarkers = function(){
    if(markers) {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
    }
    markers = [];
};
