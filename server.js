var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection( { port: 3000, address: 'localhost'});

var apiRoutes = [
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply('Hello, world!');
        }
    }
];

server.route(apiRoutes);

server.start(function() {
    console.log('Server started at: ' + server.info.uri);
});/**
 * Created by alexhoffman on 4/6/15.
 */
