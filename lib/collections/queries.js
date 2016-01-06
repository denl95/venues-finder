Queries = new Mongo.Collection('queries');

if(Meteor.isClient) {
    addQuery = function(query, lat, lng, radius){
        Meteor.call('addQuery', query, lat, lng, radius);
    };
    removeQuery = function(queryId){
        Meteor.call('deleteQuery', queryId);
    };
}

if(Meteor.isServer) {
    Meteor.methods({
        addQuery: function(query, lat, lng, radius){
            if(!Meteor.userId()){
                throw new Meteor.Error('not-authorized');
            }

            Queries.insert({
                query: query,
                lat: lat,
                lng: lng,
                createdAt: new Date(),
                owner: Meteor.userId(),
                radius: radius
            })
        },
        deleteQuery: function(_id){
            Queries.remove({_id: _id});
        }
    });
}