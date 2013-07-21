var express = require('express');
var app = express();
var fs = require("fs");
//var buffer= require("buffer");
app.use(express.logger());

app.get('/', function(request, response) {
    fs.readFileSync("/home/Songs_and_Docs/Study/coursera/startup/bitstarter/index.html",function(err,data){
	if(err){
	   throw err;
	}else{
	   var buffer = new Buffer(data);
	}
    });
  response.send(buffer.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
