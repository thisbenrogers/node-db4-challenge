
exports.up = function(knex) {
  return knex.schema.createTable('steps', steps => {
    
    steps.increments();

    steps
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    steps
      .string('step', 255)
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('steps');
};
