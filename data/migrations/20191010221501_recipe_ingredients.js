
exports.up = function(knex) {
  return knex.schema.createTable('recipe_ingredients', recipe_ingredients => {

    recipe_ingredients.increments();
    
    recipe_ingredients
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

      recipe_ingredients
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');


    recipe_ingredients
      .string('measure', 255)
      .notNullable();

    recipe_ingredients
      .float('quantity')
  
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe_ingredients');
};
