"use strict";

const restify = require('restify');
const npm = require("npm");

const server = restify.createServer({
    name: 's2',
    version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/test', function (req, res, next) {





        res.send('its works');
        return next();

});

server.listen(80, function () {
    console.log('%s listening at %s', server.name, server.url);
});