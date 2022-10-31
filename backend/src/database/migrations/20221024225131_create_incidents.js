exports.up = function(knex) {
  return knex.schema.createTable('casos', function (table){
    table.increments();

    table.string('titulo').notNullable();
    table.string('descrição').notNullable();
    table.decimal('valor').notNullable();

    table.string('id_empresa').notNullable();
    table.foreign('id_empresa').references('id').inTable('empresa');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('casos');
};
