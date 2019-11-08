
exports.up = function(knex) {
  return knex.schema.createTable('steps', step => {

    step.increments();

    step
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    step
      .integer('serial_id');

    step
      .string('step', 10255);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('steps');
};
