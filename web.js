var express = require('express');
var app = express();
var fs = require("fs");
//var buffer= require("buffer");
app.use(express.logger());

app.get('/', function(request, response) {
  var str = fs.readFileSync("index.html","utf-8");
  var buffer = new Buffer(str);
  response.send(buffer.toString("utf-8"));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
