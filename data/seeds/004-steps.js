
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step: 'Put spread-sides of bread together and enjoy', recipe_id: 1, serial_id: 3},
        {id: 2, step: 'Spread Peanut butter on both slices of bread', recipe_id: 1, serial_id: 1},
        {id: 3, step: 'Spread Jelly on one slice of bread', recipe_id: 1, serial_id: 2},
        {id: 4, step: 'Squirt chocolate syrup into glass for 20 seconds', recipe_id: 2, serial_id: 2},
        {id: 5, step: 'Top with milk and enjoy', recipe_id: 2, serial_id: 4},
        {id: 6, step: 'Stir vigorously', recipe_id: 2, serial_id: 3},
        {id: 7, step: 'Fill glass half-full with milk', recipe_id: 2, serial_id: 1},
        {id: 8, step: 'Put spread-sides of bread together and enjoy', recipe_id: 3, serial_id: 3},
        {id: 9, step: 'Add honey to peanut butter', recipe_id: 3, serial_id: 2},
        {id: 10, step: 'Spread Peanut butter on both slices of bread', recipe_id: 3, serial_id: 1},
      ]);
    });
};
