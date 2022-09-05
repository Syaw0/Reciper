/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
import mainStore from '../mainStore';
import defaultAddCacheData from './defaultAddCacheData';

const addNavigationCheck = (currentPage, targetPage) => {
  if (currentPage === 'Add Recipe' && targetPage !== 'Add Recipe' && mainStore.getState().isFirstNav) {
    mainStore.setState((state) => ({
      ...state,
      isFirstNav: false,
      textValue: { alert: 'do you want to leave add process?', no: 'No Save me!', yes: 'leave' },
      toggleFloat: true,
      currentFloat: 'exit adding',
      nextPage: targetPage,
      cacheData: defaultAddCacheData,
    }));
    return true;
  }
  return false;
};

export default addNavigationCheck;
