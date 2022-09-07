/* eslint-disable no-restricted-syntax */
const mainDb = require('../Db/mainDb.json');

const setSimilarRecipe = (recipeId, category) => {
  const similar = [];
  for (const i in mainDb[category]) {
    if (i !== `#${recipeId}`) {
      similar.push(mainDb[category][i]);
    }
  }
  return similar;
};

module.exports = setSimilarRecipe;
