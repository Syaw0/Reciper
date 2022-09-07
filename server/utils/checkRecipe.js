const checkRecipe = (recipeId, category) => (category[`#${recipeId}`] !== undefined ? category[`#${recipeId}`] : false);

module.exports = checkRecipe;
