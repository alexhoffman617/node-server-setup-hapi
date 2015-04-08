var hapi = require('hapi');

var server = new hapi.Server();
server.connection( { port: 3000, address: 'localhost'});

var apiRoutes = [
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply('Hello World!');
        }
    }
];

server.route(apiRoutes);

server.start(function() {
    console.log('Server started at http://localhost:' + server.info.port);
});
