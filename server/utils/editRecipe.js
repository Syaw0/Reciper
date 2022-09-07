/* eslint-disable consistent-return */
const fs = require('fs');
const path = require('path');
const mainDb = require('../Db/mainDb.json');

const editRecipe = (recipeId, category, editedRecipe) => {
  const delPromise = new Promise((res, rej) => {
    if (mainDb[category][`#${recipeId}`] === undefined) {
      rej(new Error());
    }
    let newData;
    if (category !== editRecipe.category) {
      delete mainDb[category][`#${recipeId}`];
      mainDb[editedRecipe.category][`#${recipeId}`] = editedRecipe;
      newData = JSON.stringify(mainDb, null, 4);
    } else {
      mainDb[editedRecipe.category][`#${recipeId}`] = editedRecipe;
      newData = JSON.stringify(mainDb, null, 4);
    }
    fs.writeFile(path.join(__dirname, '../Db/mainDb.json'), newData, (err) => {
      if (err) {
        rej(new Error());
      }
      res(true);
    });
  });

  return delPromise;
};

module.exports = editRecipe;
