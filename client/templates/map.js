Template.map.onRendered(function(){
    GoogleMaps.load();
});

Template.map.onCreated(function() {
    GoogleMaps.ready('map', function() {
        //global variable
        google.maps.LatLng.prototype.distanceFrom = function(latlng) {
            var lat = [this.lat(), latlng.lat()];
            var lng = [this.lng(), latlng.lng()];
            var R = 6378137;
            var dLat = (lat[1]-lat[0]) * Math.PI / 180;
            var dLng = (lng[1]-lng[0]) * Math.PI / 180;
            var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat[0] * Math.PI / 180 ) * Math.cos(lat[1] * Math.PI / 180 ) *
                Math.sin(dLng/2) * Math.sin(dLng/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var d = R * c;
            return Math.round(d);
        };

        //global variable
        markers = [];
    });
});

Template.map.helpers({
    mapOptions: function () {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded()) {
            // Map initialization options
            return {
                center: new google.maps.LatLng(50.439780887873354, 30.54281000671379),
                zoom: 8
            };
        }
    }
});

calculateViewportRadius = function(centerLatLng) {
    var northEast = GoogleMaps.maps.map.instance.getBounds().getNorthEast();
    var north = new google.maps.LatLng(northEast.lat(), centerLatLng.lng());
    return north.distanceFrom(centerLatLng);
};