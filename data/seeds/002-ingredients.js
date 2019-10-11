
exports.seed = function(knex) {
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'short-grain sushi rice'},
        {id: 2, ingredient_name: 'nori (dried seaweed sheets)'},
        {id: 3, ingredient_name: 'Umeboshi (pickled apricot)'},
        {id: 4, ingredient_name: 'peanut butter'},
        {id: 5, ingredient_name: 'grape jelly'},
        {id: 6, ingredient_name: 'whitebread'},
        {id: 7, ingredient_name: 'masa (corn dough)'},
        {id: 8, ingredient_name: 'chicharrón (fried fatty pork sausage)'},
        {id: 10, ingredient_name: 'refried black beans'},
        {id: 11, ingredient_name: 'mozzarella cheese'},
        {id: 9, ingredient_name: 'curtido (pickled cabbage)'}
      ]);
    });
};
