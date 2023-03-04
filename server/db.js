const Pool = require('pg').Pool;
const knex = require('knex');
const knexfile = require('./knexfile');

const knexDb = knex(knexfile.development);

const pool = new Pool({
    // user: 'postgres',
    // password: 'admin',
    // host: 'localhost',
    // port: 5433,
    // database: 'gyrodata'
    knexDb
});

module.exports = {pool, knexDb};