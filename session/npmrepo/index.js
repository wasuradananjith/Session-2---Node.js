var http = require('http');
var port = 3030;
var host = '127.0.0.1';

var server = http.createServer(function(req,res){
    res.statusCode= 200;
    res.write("Node JS Server");
    res.end();
});

server.listen(port, host, function(){
    console.log("Server started with port: "+port);
});