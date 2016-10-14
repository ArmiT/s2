/*jslint es6, node, maxlen: 80 */

"use strict";

const describe = require("mocha").describe;
const it = require("mocha").it;
const assert = require("chai").assert;

const restify = require("restify");

const authenticator = require("../src/authenticator");

const check = authenticator({
    "credentials": [
        {
            "user": "adm",
            "pass": "123"
        },
        {
            "user": "app",
            "pass": "124"
        }
    ]
});

const req = {
    "authorization": {
        scheme: "Basic",
        credentials: "dGVzdDoxMjMxMjM=",
        basic: {
            username: "adm",
            password: "123"
        }
    }
};

describe("Authenticator", function testSet() {

    it("valid data", function test() {

        check(req, undefined, function next(err) {
            assert.isTrue(err === undefined);
        });

    });

    it("invalid data - undefined req", function test() {

        check(undefined, undefined, function next(err) {
            assert.instanceOf(err, restify.UnauthorizedError);
        });

    });

    it("invalid data - undefined credentials", function test() {
        const check2 = authenticator({
            "credentials": []
        });

        check2(req, undefined, function next(err) {
            assert.instanceOf(err, restify.UnauthorizedError);
        });
    });
});
