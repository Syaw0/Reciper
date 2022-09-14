import mainStore from '../store/mainStore';
import transformEditCacheToNorm from './transformEditCacheToNorm';

const sendImgFile = async () => {
  try {
    const { editCacheData, recipeCacheData } = mainStore.getState();
    const newForm = new FormData();
    const file = editCacheData.naming.imgFile;
    newForm.append('pictureFile', file);
    newForm.append('recipeId', recipeCacheData.recipeId);

    const response = await fetch(`http://localhost:8080/edit${recipeCacheData.recipeId.split('#')[1]}`, {
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
    return false;
  }
};

const setReqForEditRecipe = async () => {
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

export default setReqForEditRecipe;
