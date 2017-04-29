var express = require("express");

var app = express();
var PORT = 3000;


// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to Friend Finder!");
});

app.get("/survey", function(req, res) {
  res.json(survey);
});