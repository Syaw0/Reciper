/* eslint-disable consistent-return */
import mainStore from '../store/mainStore';
import transformAddCacheToNorm from './transformAddCacheToNorm';

const sendImgFile = async () => {
  try {
    const newForm = new FormData();
    const file = mainStore.getState().cacheData.step1.imgFile;
    newForm.append('pictureFile', file);

    const response = await fetch('http://localhost:8080/addRecipeImg', {
      method: 'POST',
      body: newForm,
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

const sendInformation = async () => {
  try {
    const cacheData = transformAddCacheToNorm(mainStore.getState().cacheData);
    const response = await fetch('http://localhost:8080/addRecipeInfo', {
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
const setReqForInsertRecipe = async () => {
  try {
    const imgResult = await sendImgFile();
    const infoResult = await sendInformation();
    if (infoResult && imgResult) {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
};

export default setReqForInsertRecipe;
