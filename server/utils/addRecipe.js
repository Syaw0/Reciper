/* eslint-disable prefer-promise-reject-errors */
const fs = require('fs');
const path = require('path');
const mainDb = require('../Db/mainDb.json');

const addRecipe = (recipe) => new Promise((res, rej) => {
  mainDb[recipe.category][`#${mainDb.currentId + 1}`] = recipe;
  mainDb[recipe.category][`#${mainDb.currentId + 1}`].recipeId = `#${mainDb.currentId + 1}`;
  mainDb[recipe.category][`#${mainDb.currentId + 1}`].imgUrl = `http://localhost:8080/img${mainDb.currentId + 1}.png`;
  mainDb.currentId += 1;
  const newData = JSON.stringify(mainDb, null, 4);
  fs.writeFile(path.join(__dirname, '../Db/mainDb.json'), newData, 'utf-8', (err) => {
    if (err) {
      rej(false);
    }
    res(true);
  });
});

module.exports = addRecipe;
