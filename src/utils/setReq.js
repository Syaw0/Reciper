/* eslint-disable consistent-return */
/* eslint-disable no-return-await */
/* eslint-disable no-use-before-define */
import mainStore from '../store/mainStore';
import transformAddCacheToNorm from './transformAddCacheToNorm';
import transformEditCacheToNorm from './transformEditCacheToNorm';

const setRequest = async (type) => {
  let result;
  switch (type) {
    case 'addRecipe':
      result = await setReqForInsertRecipe();
      return result;

    case 'editRecipe':
      result = await setReqForEditRecipe();
      return result;

    default:
      break;
  }
};

const setReqForInsertRecipe = async () => {
  try {
    const cacheData = transformAddCacheToNorm(mainStore.getState().cacheData);
    const response = await fetch('http://localhost:8080/addRecipe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cacheData),
    });
    const data = await response.json();
    if (data.status) {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
};

const setReqForEditRecipe = async () => {
  try {
    const { editCacheData, recipeCacheData } = mainStore.getState();
    const cacheData = transformEditCacheToNorm(
      recipeCacheData.recipeId,
      recipeCacheData.category,
      editCacheData,
    );
    const response = await fetch(`http://localhost:8080/edit${recipeCacheData.recipeId.split('#')[1]}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cacheData),
    });
    const data = await response.json();
    if (data.status) {
      return true;
    }
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default setRequest;
