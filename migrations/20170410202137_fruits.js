
exports.up = function(knex) {
  return knex.schema.createTable('fruits', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('picture_url').notNullable();
    table.string('color').notNullable();
    table.integer('calories').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('fruits');
};
