
exports.up = function(knex) {
  return knex.schema.createTable('recipes', recipes => {

    recipes.increments();
    
    recipes
    .string('recipe_name', 255)
    .notNullable()
    .unique();
    
    recipes
    .string('recipe_desc', 10240)
  
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipes');
};
