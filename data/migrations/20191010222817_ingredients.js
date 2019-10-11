
exports.up = function(knex) {
  return knex.schema.createTable('ingredients', ingredients => {

    ingredients.increments();
    
    ingredients
      .string('recipe_name', 255)
      .notNullable()
      .unique();
  
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ingredients');
};
