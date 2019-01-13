const express = require("express");
const app = express();
const port = 3000;

app.listen(port, function() {
  console.log("Server running");
});

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.get("/parks", function(req, res) {
  res.send("The Parks You've Seen");
});
