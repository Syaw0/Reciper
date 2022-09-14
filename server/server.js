const express = require('express');
const path = require('path');
const bp = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const mainDb = require('./Db/mainDb.json');
const category = require('./Db/categories');
const checkCategory = require('./utils/checkCategory');
const checkRecipe = require('./utils/checkRecipe');
const fixDataForHome = require('./utils/homeUtil');
const setSimilarRecipe = require('./utils/setSimilarRecipes');
const addRecipe = require('./utils/addRecipe');
const deleteRecipe = require('./utils/deleteRecipe');
const editRecipe = require('./utils/editRecipe');
const searchEng = require('./utils/search');
const checkHomeData = require('./utils/checkHomeData');
const uploadImg = require('./utils/uploadImg');

const app = express();

app.use(bp.json({ limit: '500mg' }));
app.use(bp.urlencoded({ extended: true, limit: '500mg', parameterLimit: '5000000' }));

app.use(cors({
  origin: '*',
  optionsSuccessStatus: '204',
  allowedHeaders: '*',
  methods: ['POST', 'GET', 'PUT', 'OPTIONS', 'DELETE'],
  preflightContinue: false,
}));

app.use(express.static('public'));
app.use(fileUpload());

app.get('/', (req, res) => {
  res.set({
    'X-Content-Type-Options': 'nosniff',
  });
  res.sendFile(path.join(`${__dirname}/public/index.html`));
});

app.get('/home', (req, res) => {
  res.set({
    // 'Access-Control-Allow-Origin': '*',
  });

  res.send({
    ...fixDataForHome(),
  });
});

app.get('/categories', (req, res) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
  });
  res.send({
    ...category,
  });
});

app.get('/categories/:category', (req, res) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
  });
  let response;
  const check = checkCategory(req.params.category);
  if (!check) {
    response = { error: 'no such category exist' };
  } else {
    response = check;
  }
  res.send({
    ...response,
  });
});

app.get('/categories/:category/id:recipe/', (req, res) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
  });
  const cate = req.params.category;
  const { recipe } = req.params;
  let response;
  const checkCate = checkCategory(cate);
  let checkRec;
  if (!checkCate) {
    response = { error: 'no such category exist' };
  } else {
    checkRec = checkRecipe(recipe, checkCate);
    if (!checkRec) {
      response = { error: 'no such recipe exist' };
    } else {
      response = { ...checkRec };
      response.similar = setSimilarRecipe(recipe, cate);
    }
  }
  res.send({
    ...response,
  });
});

app.get('/img:imgSrc', (req, res) => {
  try {
    res.sendFile(`${__dirname}/uploads/${req.params.imgSrc}`);
  } catch (err) {
    res.sendFile(`${__dirname}/uploads/default.png`);
  }
});

app.post('/addRecipe:type', async (req, res) => {
  let response;
  if (req.params.type === 'Img') {
    const uploadedImg = req.files.pictureFile;
    const upPath = `${__dirname}/uploads/${Number(mainDb.currentId + 1)}.png`;

    await uploadImg(uploadedImg, upPath).then(() => {
      response = {
        status: true,
        text: 'successfully upload',
      };
    }).catch(() => {
      response = {
        status: false,
        text: 'error during upload',
      };
    });
  } else {
    await addRecipe(req.body).then(() => {
      response = {
        status: true,
        text: 'successfully insert recipe to server',
      };
    }).catch(() => {
      response = {
        status: false,
        text: 'error Happen during operation',
      };
    });
  }
  res.send(response);
});

app.delete('/delete:recipeId', async (req, res) => {
  let response;
  await deleteRecipe(req.body.id, req.body.category).then(() => {
    response = { status: true, msg: 'successfully delete the recipe' };
  }).catch(() => {
    response = { status: false, msg: 'something wrong, may your recipe doesn`t exist in db' };
  });
  await checkHomeData(req.body.id).then(() => {}).catch(() => {
    response = { status: false, msg: 'something wrong, may your recipe doesn`t exist in db' };
  });
  res.send(response);
});

app.post('/edit:recipeId', async (req, res) => {
  let response;

  if (req.files === undefined) {
    await editRecipe(req.body.id, req.body.category, req.body.editedRecipe).then(() => {
      response = { status: true, msg: 'successfully Edit the recipe' };
    }).catch(() => {
      response = { status: false, msg: 'something wrong, may your recipe doesn`t exist in db' };
    });
  } else {
    const uploadedImg = req.files.pictureFile;
    const upPath = `${__dirname}/uploads/${req.body.recipeId.split('#')[1]}.png`;
    await uploadImg(uploadedImg, upPath).then(() => {
      response = {
        status: true,
        text: 'successfully upload',
      };
    }).catch(() => {
      response = {
        status: false,
        text: 'error during upload',
      };
    });
  }
  res.send(response);
});

app.get('/s=:search', async (req, res) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
  });

  let response;
  const result = searchEng(req.params.search);
  if (result.length === 0) {
    response = { status: 'not Found', msg: 'cant found this keywork' };
  } else {
    response = {
      status: 'founded', msg: 'find something', number: result.length, result,
    };
  }
  res.send(response);
});

app.get('*', (req, res) => {
  res.set({
    'X-Content-Type-Options': 'nosniff',
  });
  res.send('404 Error');
});

app.listen(8080, () => {
});

module.exports = app;
