var http = require('http');

var fs = require('fs');
var htmlFile;

fs.readFile('./index.html', function(err, data) {
    if (err){
        throw err;
    }
    htmlFile = data;
});



var server = http.createServer(function (request, response) {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.end(htmlFile);
    });

//Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);


console.log("Server running at http://127.0.0.1:8000/");