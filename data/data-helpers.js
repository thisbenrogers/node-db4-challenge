const db = require('../data/dbConfig');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("ingredients as i")
    .join("recipe_ingredients as hub", "hub.ingredient_id", "i.id")
    .select("i.id", "i.ingredient_name", "hub.quantity", "hub.measure")
    .where({ id: id })
}
function getInstructions(id) {
  return db("recipes as r")
    .join("steps as s", "s.recipe_id", "r.id")
    .select("s.id", "s.step")
    .where({ id: id })
}