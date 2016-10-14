/*jslint es6, node, maxlen: 80 */
/*eslint no-console: 0 */

"use strict";

const config = require("config");
const restify = require("restify");
const authenticator = require("./authenticator")(
    config.get("authentication")
);

const server = restify.createServer({
    name: "s2",
    version: "1.0.0"
});

server.pre(restify.pre.sanitizePath());

server.use([
    restify.acceptParser(server.acceptable),
    restify.authorizationParser(),
    authenticator,
    restify.queryParser(),
    restify.bodyParser()
]);

//server.get(
//    {
//        path: "/test",
//        version: "1.0.0"
//    },
//    function handle(req, res, next) {
//        res.send("test");
//        next();
//    }
//);

//server.get("/test", function handle(req, res, next) {
//
//    //console.log(config.get("authentication"));
//    console.log(req.authorization);
//    res.send();
//    next();
//
//    //npm.load(
//    //    {
//    //        loaded: false
//    //        //json: true,
//    //        //depth: 0
//    //    },
//    //    function (err) {
//    //
//    //
//    //        npm.commands.install(["sshkey@^0.0.6"], function (e, d) {
//    //            console.log(e, d);
//    //
//    //            //npm.commands.ls([], function (a, b) {
//    //            //
//    //            //    const deps = lodash.filter(b.dependencies
//    // , function(value, key, collection) {
//    //            //        console.log(key, value.depth);
//    //            //        return value.depth ===  1;
//    //            //    });
//    //            //
//    //            //    res.send("");
//    //            //    return next();
//    //            //});
//    //
//    //        });
//    //
//    //
//    //
//    //        //npm.commands.outdated({}, function (a, b) {
//    //        //    res.send(b);
//    //        //    return next();
//    //        //});
//    //
//    //    }
//    //);
//});

server.listen(config.get("server.port"), function report() {
    console.log("%s listening at %s", server.name, server.url);
});
