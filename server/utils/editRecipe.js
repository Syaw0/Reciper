/* eslint-disable consistent-return */
const fs = require('fs');
const path = require('path');
const mainDb = require('../Db/mainDb.json');

const editRecipe = (recipeId, category, editedRecipe) => {
  const editPromise = new Promise((res, rej) => {
    if (mainDb[category][recipeId] === undefined) {
      rej(new Error());
    }
    let newData;
    if (category !== editedRecipe.category) {
      delete mainDb[category][recipeId];
      mainDb[editedRecipe.category][recipeId] = editedRecipe;
      mainDb[editedRecipe.category][recipeId].imgUrl = `http://localhost:8080/img${recipeId}.png`;
      newData = JSON.stringify(mainDb, null, 4);
    } else {
      mainDb[editedRecipe.category][recipeId] = editedRecipe;
      newData = JSON.stringify(mainDb, null, 4);
    }
    fs.writeFile(path.join(__dirname, '../Db/mainDb.json'), newData, (err) => {
      if (err) {
        rej(new Error());
      }
      res(true);
    });
  });

  return editPromise;
};

module.exports = editRecipe;
