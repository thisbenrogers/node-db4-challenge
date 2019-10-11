
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Onigiri', recipe_desc: 'Japanese rice balls'},
        {id: 2, recipe_name: 'PB&J Sandy', recipe_desc: 'The classic sandwich'},
        {id: 3, recipe_name: 'Pupusas Cornichon', recipe_desc: 'Salvadoran pork-stuffed masa cakes'}
      ]);
    });
};
