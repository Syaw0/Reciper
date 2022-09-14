/* eslint-disable consistent-return */
const fs = require('fs');
const path = require('path');
const mainDb = require('../Db/mainDb.json');

const deleteRecipe = async (recipeId, category) => {
  const delPromise = new Promise((res, rej) => {
    if (mainDb[category][recipeId] === undefined) {
      rej(new Error());
    }
    delete mainDb[category][recipeId];
    const newData = JSON.stringify(mainDb, null, 4);
    fs.writeFile(path.join(__dirname, '../Db/mainDb.json'), newData, (err) => {
      if (err) {
        rej(new Error());
      }
      const imgPath = `${__dirname}/../uploads/${recipeId.split('#')[1]}.png`;
      fs.unlink(imgPath, (error) => {
        if (error) {
          rej(new Error());
        } else {
          res(true);
        }
      });
    });
  });

  return delPromise;
};

module.exports = deleteRecipe;
