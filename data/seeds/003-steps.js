
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, recipe_id: 1, step: 'cook rice'},
        {id: 2, recipe_id: 1, step: 'take a handful of rice, ball it up, and flatten it on a piece of saran wrap, keeping your hands moist while handling rice'},
        {id: 3, recipe_id: 1, step: 'place spoonful of umeboshi in center of rice'},
        {id: 4, recipe_id: 1, step: 'using saran wrap to lift edges of flattened rice patty, begin to work edges around umeboshi to form a ball, pressing the ball together in between cupped hands as you go'},
        {id: 5, recipe_id: 1, step: 'place in between two trimmed pieces of nori'},
        {id: 6, recipe_id: 2, step: 'take two peices of bread, and spread peanut butter on one side of each'},
        {id: 7, recipe_id: 2, step: 'spread generous amount of grape jelly on one peice of peanut-buttered bread'},
        {id: 8, recipe_id: 2, step: 'place both peices of bread together with spreads facing inward'},
        {id: 9, recipe_id: 3, step: 'take a handful of masa, ball it up, and flatten it out in the palm of your hand, being sure to keep your hands moist whenever handling masa'},
        {id: 10, recipe_id: 3, step: 'place a tablespoon of chicharrón in middle of masa, with a teaspoon each beans and cheese'},
        {id: 11, recipe_id: 3, step: 'fold edges of masa up and over filling, forming a ball and using small amounts of water to patch any cracks'},
        {id: 12, recipe_id: 3, step: 'flatten ball carefully, continuing to use water to patch cracks'},
        {id: 13, recipe_id: 3, step: 'fry in pan at med-high for 4 minutes on each side'},
        {id: 14, recipe_id: 3, step: 'Serve with curtido'}
      ]);
    });
};
