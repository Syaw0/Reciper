import mainStore from '../store/mainStore';
import transformAddCacheToNorm from './transformAddCacheToNorm';

const setRequest = async () => {
  const cacheData = transformAddCacheToNorm(mainStore.getState().cacheData);
  const response = await fetch('http://localhost:8080/addRecipe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cacheData),
  });
  const data = await response.json();
  console.log(data);
  return true;
};

export default setRequest;
