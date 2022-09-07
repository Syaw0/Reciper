const mainDb = require('../Db/mainDb.json');

const checkCategory = (category) => (mainDb[category] !== undefined ? mainDb[category] : false);
module.exports = checkCategory;
