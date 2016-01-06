if(Meteor.isClient) {
    exportCsv = function(venues){
        var nameFile = 'venues.csv';
        Meteor.call('exportCsv', venues, function(err, fileContent) {
            if (fileContent) {
                var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
                saveAs(blob, nameFile);
            }
        });
    };
}

if(Meteor.isServer) {
    Meteor.methods({
       exportCsv: function(collection){
           return exportcsv.exportToCSV(collection);
       }
    });
}