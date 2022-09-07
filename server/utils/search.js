/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const mainDb = require('../Db/mainDb.json');

const searchEng = (query) => {
  const q = query.toLowerCase();
  const result = [];
  for (const i in mainDb) {
    for (const y in mainDb[i]) {
      const currentRecipe = mainDb[i][y];
      if (currentRecipe.category !== undefined) {
        if (currentRecipe.name.toLowerCase().search(q) !== -1) {
          result.push(currentRecipe);
        } else if (currentRecipe.category.toLowerCase().search(q) !== -1) {
          result.push(currentRecipe);
        }
      }
    }
  }
  return result;
};

module.exports = searchEng;
