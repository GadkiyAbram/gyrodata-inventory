const Pool = require('pg').Pool;
const knex = require('knex');
const knexfile = require('./knexfile');

const pool = new Pool({
    user: 'postgres',
    password: '12345',
    host: 'localhost',
    port: 5432,
    database: 'gyrodata_tracker'
});

const knexDb = knex(knexfile.development);

module.exports = {pool, knexDb};