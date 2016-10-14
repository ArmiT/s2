/*jslint es6, node, maxlen: 80 */

"use strict";

const restify = require("restify");
const lodash = require("lodash");

function init(config) {

    return function authenticate(req, ignore, next) {

        const offerUser = lodash.get(
            req,
            "authorization.basic.username"
        );
        const offerPass = lodash.get(
            req,
            "authorization.basic.password"
        );

        const authResult = config
            .credentials
            .some(function tryAuth({user, pass}) {
                return user === offerUser
                        && pass === offerPass;
            });

        return authResult
            ? next()
            : next(new restify.UnauthorizedError("Unauthorized"));
    };
}

module.exports = Object.freeze(init);
