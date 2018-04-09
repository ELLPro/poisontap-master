var net = require('net');

var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.pipe(socket);
});

server.listen(8080, 'sdfsdfsdfsd-project123213.193b.starter-ca-central-1.openshiftapps.com');