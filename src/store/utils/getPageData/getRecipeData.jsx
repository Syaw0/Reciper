/* eslint-disable import/no-cycle */
import mainStore from '../../mainStore';

const getRecipeData = async () => {
  const { currentRecipeId } = mainStore.getState();
  const { currentRecipeCategory } = mainStore.getState();
  const response = await fetch(`http://localhost:8080/categories/${currentRecipeCategory}/id${currentRecipeId.split('#')[1]}`);
  const data = await response.json();
  return data;
};

export default getRecipeData;
