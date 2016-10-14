/*jslint es6, node, maxlen: 80 */
/*eslint no-console: 0 */
/*eslint no-magic-numbers: 0 */
/*eslint camelcase: 0 */

"use strict";

const Joi = require("joi");

module.exports = Joi.object().keys({
    id: Joi.number().integer().required().tags(["add"]),
    title: Joi.string().min(3).max(255).required(),
    repository: Joi.string().uri({
        scheme: [
            "http",
            "https",
            "git"
        ]
    }),
    repository_version: Joi.string().min(1).max(255).required(),
    created_at: Joi.date().timestamp("unix"),
    updated_at: Joi.date().timestamp("unix")
});
