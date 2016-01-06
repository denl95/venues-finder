Template.queries.helpers({
   queries: function(){
       return Queries.find();
   }
});

Template.queries.events({
    'click .glyphicon-trash': function(){
        return removeQuery(this._id);
    }
});
