/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
const batteriesTable = 'batteries';

exports.up = function(knex) {
    return knex.schema.createTable(batteriesTable, function(table) {
        table.string('serialOne').notNullable();
        table.string('serialTwo');
        table.string('serialThree');
        table.string('arrived');
        table.string('ccd');
        table.string('container');
        table.integer('condition');
        table.string('location');
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function(knex) {
    return knex.schema.dropTable(batteriesTable);
};
