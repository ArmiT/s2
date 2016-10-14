"use strict"

const Joi = require('joi');

module.exports = Joi.object().keys({
    id: Joi.number().integer().required().tags(['add']),
    title: Joi.string().min(3).max(255).required(),
    repository: Joi.string().uri({
        scheme: [
            'http',
            'https',
            'git'
        ]
    }),
    repository_version: Joi.string().min(1).max(255).required(),
    created_at: Joi.date().timestamp('unix'),
    updated_at: Joi.date().timestamp('unix')
});

module.exports = Object.freeze(schema);