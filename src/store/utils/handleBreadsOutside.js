/* eslint-disable import/no-cycle */
import defaultRoutes from './defaultRoutes';
import mainStore from '../mainStore';

const handleBreadsOutside = (pagename) => {
  const { breadCrumbs, currentCategory } = mainStore.getState();

  if (pagename === 'Recipe') {
    const newBread = [...breadCrumbs];
    if (breadCrumbs[breadCrumbs.length - 1].name === 'Recipe') {
      newBread[newBread.length - 1] = {
        name: 'Recipe',
        level: newBread.length,
      };
      return newBread;
    }
    newBread.push({
      name: 'Recipe',
      level: newBread.length,
    });
    return newBread;
  }
  const newBread = [];
  defaultRoutes[pagename].split('/').forEach((bread, index) => {
    newBread.push({
      name: bread,
      level: index,
    });
  });

  if (pagename === 'recipeCategory') {
    console.log(currentCategory);
    newBread.push({
      name: currentCategory,
      level: newBread.length,
    });
    // setBreadsCrumbs(newBread);
    return newBread;
  }
  return newBread;
};

export default handleBreadsOutside;
