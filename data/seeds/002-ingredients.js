
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ing_name: 'Peanut Butter'},
        {id: 2, ing_name: 'Grape Jelly'},
        {id: 3, ing_name: 'Sliced Bread'},
        {id: 4, ing_name: 'Milk'},
        {id: 5, ing_name: 'Chocolate Milk Syrup'},
        {id: 6, ing_name: 'Honey'}
      ]);
    });
};
