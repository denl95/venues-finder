UI.registerHelper('increment', function(index){
    return ++index;
});

UI.registerHelper('moment', function(date){
    return moment(date).format("MMM D H:mm");
});

UI.registerHelper('km', function(radius){
    return parseFloat(radius/1000).toFixed(2) + 'km';
});