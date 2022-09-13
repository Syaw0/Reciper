/* eslint-disable no-loop-func */
/* eslint-disable consistent-return */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
const fs = require('fs');
const path = require('path');
const homeData = require('../Db/homeData.json');

const checkHomeData = (recipeId) => new Promise((res, rej) => {
  for (const i in homeData) {
    if (homeData[i] === 'topCategories') { continue; }
    // eslint-disable-next-line guard-for-in
    for (const y in homeData[i]) {
      if (homeData[i][y] === recipeId) {
        homeData[i].splice(y, 1);
        const newData = JSON.stringify(homeData, null, 4);
        fs.writeFile(path.join(__dirname, '../Db/homeData.json'), newData, (err) => {
          if (err) {
            rej(new Error());
          }
          res(true);
        });
        res(true);
      }
    }
    rej(new Error());
  }
});

module.exports = checkHomeData;
