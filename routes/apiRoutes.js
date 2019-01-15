// we need data sources
// arrays with info on available tables and etc.
var tableData = require("../data/tables");
var waitlistData = require("../data/waitlist");

module.exports = function(app) {
    app.get('/api/tables', function(req, res) {
        res.json(tableData);        
    });

    app.get("/api/reservations", function(req, res) {
        return res.json(reservations);
      });
      
      app.get("/api/reservations/:reservation", function(req, res) {
        var chosen = req.params.reservation;
      
        console.log(chosen);
      
        for (var i = 0; i < reservations.length; i++) {
          if (chosen === reservations[i].routeName) {
            return res.json(reservations[i]);
          }
        }
      
        return res.json(false);
      });
      
      
      app.post("/api/reservations", function(req, res) {
       
        var newreservation = req.body;
      
        console.log(newreservation);
      
      
        reservations.push(newreservation);
      
       
        res.json(newreservation);
      });
}
