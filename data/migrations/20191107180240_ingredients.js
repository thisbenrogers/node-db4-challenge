
exports.up = function(knex) {
  return knex.schema.createTable('ingredients', ingredient => {

    ingredient.increments();

    ingredient
      .string('ing_name', 255)
      .notNullable();

  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ingredients');
};
