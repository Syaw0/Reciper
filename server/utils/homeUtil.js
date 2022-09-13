/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
const category = require('../Db/categories');
const mainDb = require('../Db/mainDb.json');
const homeData = require('../Db/homeData.json');

const fixRecipes = (flag) => homeData[flag].map((v) => {
  for (const i in mainDb) {
    if (mainDb[i][v] !== undefined) {
      return mainDb[i][v];
    }
  }
});

const fixCategory = (flag) => homeData[flag].map((v) => category[v]);

const fixDataForHome = () => {
  const newData = {};
  for (const i in homeData) {
    if (i !== 'topCategories') {
      newData[i] = fixRecipes(i);
    } else {
      newData[i] = fixCategory(i);
    }
  }
  return newData;
};

module.exports = fixDataForHome;
