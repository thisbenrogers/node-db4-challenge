
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'PB&J', desc: 'The classic sandwich'},
        {id: 2, recipe_name: 'Chocolate Milk', desc: 'Milk, with chocolate'},
        {id: 3, recipe_name: 'PB&Honey', desc: 'A spin on the classic sandwich'}
      ]);
    });
};
