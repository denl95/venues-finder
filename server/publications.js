Meteor.publish('userQueries', function(){
    return Queries.find({owner: this.userId});
});