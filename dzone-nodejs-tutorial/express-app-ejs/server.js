const express = require("express");
const ejs = require('ejs');
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const visited = []

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.listen(port, function() {
  console.log("Server running");
});

app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/parks", function(req, res) {
  res.render("parks", {visited: visited});
});

app.post("/parks", function(req, res) {
  var name = req.body.parkName;
  var image = req.body.parkImage;
  var newPark = {name: name, image: image};
  visited.push(newPark);
  res.redirect("/parks");
});
