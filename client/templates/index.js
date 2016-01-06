Template.index.helpers({
    venues: function() {
        return Session.get('venues');
    }
});

Template.index.events({
    'keypress .search-box': function(event) {
        if (event.charCode == 13) {

            event.stopPropagation();

            clearMarkers();

            var query = event.target.value;
            event.target.value = '';

            var centerLatLng = GoogleMaps.maps.map.instance.getCenter();

            var radius = calculateViewportRadius(centerLatLng);

            addQuery(query, centerLatLng.lat(), centerLatLng.lng(), radius);

            var center = _.reduce(centerLatLng, function(memo, value) {
                return memo() + ', ' + value();
            });

            Meteor.call(
                'getVenuesSearch',
                {ll: center, query: query, radius: radius, limit: 50},
                function(err, items) {
                    var venues = [];
                    items.forEach(function(item) {
                        var latLng = {
                            lat: item.location.lat,
                            lng: item.location.lng
                        };
                        addMarker(latLng, item.name);

                        var venue = {
                            name: item.name,
                            lat: item.location.lat,
                            lng: item.location.lng,
                            city: item.location.city,
                            address: item.location.address
                        };
                        venues.push(venue);
                    });

                    Session.set('venues', venues);
            });

        }
    },
    'click #export-csv': function() {
        var venues = Session.get('venues');
        exportCsv(venues);
    }
});