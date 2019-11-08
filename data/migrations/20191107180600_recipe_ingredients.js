
exports.up = function(knex) {
  return knex.schema.createTable('recipe_ingredients', ri => {

    ri.increments();

    ri
      .integer('rec_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    ri
      .integer('ing_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingreients')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    ri
      .string('measure', 255)
      .notNullable();

    ri
      .float('quantity');

  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe_ingredients');
};
