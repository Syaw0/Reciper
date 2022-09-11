/* eslint-disable import/no-cycle */
import mainStore from '../../mainStore';

const getSpecificCategoryData = async () => {
  const { currentCategory } = mainStore.getState();
  const response = await fetch(`http://localhost:8080/categories/${currentCategory}`);
  const data = await response.json();
  return Object.values(data);
};

export default getSpecificCategoryData;
