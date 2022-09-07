const dessertRecipes = require('./recipes/dessertRecipes');
const goatRecipes = require('./recipes/goatRecipes');
const chickenRecipes = require('./recipes/chickenRecipes');
const beefRecipes = require('./recipes/beefRecipes');
const spaghettiRecipes = require('./recipes/spaghettiRecipes');
const porkRecipes = require('./recipes/porkRecipes');

const recipes = {
  currentId: 2,
  ...dessertRecipes,
  ...goatRecipes,
  ...beefRecipes,
  ...chickenRecipes,
  ...spaghettiRecipes,
  ...porkRecipes,
};

module.exports = recipes;
