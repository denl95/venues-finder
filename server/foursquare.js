Meteor.startup(function(){
    var clientId = Meteor.settings.foursquare.clientId;
    var clientSecret = Meteor.settings.foursquare.clientSecret;

    Foursquare = Meteor.npmRequire('node-foursquare-venues')(clientId, clientSecret);
});