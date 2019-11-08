
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {id: 1, rec_id: 1, ing_id: 1, measure: 'spoonful', quantity: 1},
        {id: 2, rec_id: 1, ing_id: 2, measure: 'spoonful', quantity: 1},
        {id: 3, rec_id: 1, ing_id: 3, measure: 'slice(s)', quantity: 2},
        {id: 4, rec_id: 2, ing_id: 4, measure: 'fluid ounces', quantity: 16},
        {id: 5, rec_id: 2, ing_id: 5, measure: 'second squirt', quantity: 20},
        {id: 6, rec_id: 3, ing_id: 1, measure: 'spoonful', quantity: 1},
        {id: 7, rec_id: 3, ing_id: 6, measure: 'second squirt', quantity: 5},
        {id: 8, rec_id: 3, ing_id: 3, measure: 'slice(s)', quantity: 2}
      ]);
    });
};
