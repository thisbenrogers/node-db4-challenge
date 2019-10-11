
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {id: 1, ingredient_id: 1, recipe_id: 1, measure: 'cups', quantity: '2'},
        {id: 2, ingredient_id: 2, recipe_id: 1, measure: 'sheets', quantity: '2'},
        {id: 3, ingredient_id: 3, recipe_id: 1, measure: 'cups', quantity: '0.75'},
        {id: 4, ingredient_id: 4, recipe_id: 2, measure: 'tablespoons', quantity: '3'},
        {id: 5, ingredient_id: 5, recipe_id: 2, measure: 'tablespoons', quantity: '0.1.5'},
        {id: 6, ingredient_id: 6, recipe_id: 2, measure: 'slices', quantity: '2'},
        {id: 7, ingredient_id: 7, recipe_id: 3, measure: 'cups', quantity: '3'},
        {id: 8, ingredient_id: 8, recipe_id: 3, measure: 'cups', quantity: '1'},
        {id: 9, ingredient_id: 9, recipe_id: 3, measure: 'cups', quantity: '1'},
        {id: 10, ingredient_id: 10, recipe_id: 3, measure: 'cups', quantity: '0.5'},
        {id: 11, ingredient_id: 11, recipe_id: 3, measure: 'cups', quantity: '0.5'},
      ]);
    });
};
