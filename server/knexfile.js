'use strict';

const {development} = require('./config');

module.exports = {
    development: development.connect
};
