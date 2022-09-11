/* eslint-disable import/no-cycle */
import createRecipeCard from '../../../pages/utils/createRecipeCard';
import mainStore from '../../mainStore';
import getCategoryData from './getCategoryData';
import getHomeData from './getHomeData';
import getSpecificCategoryData from './getSpecificCategoryData';
import getRecipeData from './getRecipeData';

const getPageData = async (pageName) => {
  mainStore.setState({
    isLoaderEnable: true,
  });

  try {
    switch (pageName) {
      case 'Home':
        mainStore.setState({
          homeCacheData: await getHomeData(),
        });
        return true;

      case 'recipeCategory':
        mainStore.setState({
          currentOrderList: createRecipeCard('normal', await getSpecificCategoryData()),
        });
        return true;

      case 'Category':
        mainStore.setState({
          currentOrderList: createRecipeCard('category', await getCategoryData()),
        });
        return true;

      case 'Recipe':
        mainStore.setState({
          recipeCacheData: await getRecipeData(),
        });
        return true;

      default:
        return true;
    }
  } catch (err) {
    console.log('err happen');

    return false;
  }
};

export default getPageData;
