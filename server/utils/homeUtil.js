/* eslint-disable no-restricted-syntax */
const category = require('../Db/categories');
const home = require('../Db/home');
const mainDb = require('../Db/mainDb.json');

const fixRecipes = (flag) => home[flag].map((v) => mainDb[v.category][v.recipeId]);

const fixCategory = (flag) => home[flag].map((v) => category[v]);

const fixDataForHome = () => {
  const newData = {};
  for (const i in home) {
    if (i !== 'topCategories') {
      newData[i] = fixRecipes(i);
    } else {
      newData[i] = fixCategory(i);
    }
  }
  return newData;
};

module.exports = fixDataForHome;
