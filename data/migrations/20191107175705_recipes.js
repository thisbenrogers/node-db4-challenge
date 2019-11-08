
exports.up = function(knex) {
  return knex.schema.createTable('recipes', recipe => {

    recipe.increments();

    recipe
      .string('recipe_name', 255)
      .notNullable();

    recipe  
      .string('desc', 10240);

  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipes');
};
