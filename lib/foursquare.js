if(Meteor.isServer) {
    Meteor.methods({
        getVenuesExplore: function(searchObj){
            var wrappedSearch = Async.wrap(Foursquare.venues, 'explore');

            return wrappedSearch(searchObj).response.groups[0].items;
        },
        getVenuesSearch: function(searchObj){
            var wrappedSearch = Async.wrap(Foursquare.venues, 'search');
            return wrappedSearch(searchObj).response.venues;
        }
    });
}