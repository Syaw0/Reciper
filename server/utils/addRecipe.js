const fs = require('fs');
const path = require('path');
const mainDb = require('../Db/mainDb.json');

const addRecipe = (recipe) => {
  mainDb[recipe.category][`#${mainDb.currentId + 1}`] = recipe;
  mainDb[recipe.category][`#${mainDb.currentId + 1}`].recipeId = `#${mainDb.currentId + 1}`;
  mainDb.currentId += 1;
  const newData = JSON.stringify(mainDb, null, 4);
  fs.writeFile(path.join(__dirname, '../Db/mainDb.json'), newData, 'utf-8', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('success');
    }
  });
};

module.exports = addRecipe;
