// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the events
  app.get("/api/events", function (req, res) {
    if (req.query.orgId) {
      query.orgId = req.query.orgId;
    }
    
    db.Event.findAll({
      where: query,
      include: [db.Org]
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // GET route for getting all of the events of a certain category
  app.get("/api/events/:eventCat", function (req, res) {

    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Event
    db.Event.findAll({
      where: {
        eventCat: req.params.eventCat
      },
      include: [db.Org]
    }).then(function (dbEvent) {
      res.json(dbEvent);
    });
  });

  // POST route for saving a new event
  app.post("/api/events", function (req, res) {
    db.Event.create(req.body).then(function (dbEvent) {
      res.json(dbEvent);
    });
  });

  // GET route for getting all of the events of a certain zipcode
  // app.get("/api/events/:eventZip", function(req, res) {

  // Here we add an "include" property to our options in our findAll query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Event
  //   db.Event.findAll({
  //     where: {
  //       eventZip: req.params.eventZip
  //     },
  //     include: [db.Org]
  //   }).then(function(dbEvent) {
  //     res.json(dbEvent);
  //   });
  // });

  // GET route for getting all of the events of a certain date
  //  app.get("/api/events/:eventDate", function(req, res) {

  // Here we add an "include" property to our options in our findAll query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Event
  //   db.Event.findAll({
  //     where: {
  //       eventDate: req.params.eventDate
  //     },
  //     include: [db.Org]
  //   }).then(function(dbEvent) {
  //     res.json(dbEvent);
  //   });
  // });




  // Get route for retrieving a single event
  // app.get("/api/events/:id", function(req, res) {
  // Here we add an "include" property to our options in our findOne query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Org
  //   db.Event.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.Org]
  //   }).then(function(dbEvent) {
  //     res.json(dbEvent);
  //   });
  // });



  // DELETE route for deleting events
  // app.delete("/api/events/:id", function(req, res) {
  //   db.Event.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbEvent) {
  //     res.json(dbEvent);
  //   });
  // });

  // PUT route for updating events
  // app.put("/api/events", function(req, res) {
  //   db.Event.update(
  //     req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then(function(dbEvent) {
  //     res.json(dbEvent);
  //   });
  // });
};
