/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const {knexDb} = require('../db');
const batteriesTable = 'batteries';
const serialOneDefault = 'S1-0331-0652';

exports.up = function(knexDb) {
  return knexDb(batteriesTable).insert({
      serialOne: serialOneDefault,
      serialTwo: '',
      serialThree: '',
      arrived: '2019-03-01',
      ccd: '102103-0240244-240442',
      container: 'GYLS-001',
      condition: 1,
      location: 'Sakhalin SLB Base'
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knexDb(batteriesTable)
      .where('serialOne', serialOneDefault)
      .delete();
};
