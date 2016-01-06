if (Meteor.isClient) {
   Meteor.subscribe('userQueries');
}

Router.configure({
   layoutTemplate: 'layout'
});

Router.route('/', {
   name: 'index'
});