var http = require('http');              

http.createServer(function (req, res) {    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Appar Perumaan thiruvadi potri potri');                  
}).listen(8080);              
