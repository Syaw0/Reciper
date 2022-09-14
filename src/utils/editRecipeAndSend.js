/* eslint-disable no-restricted-exports */
import mainStore from '../store/mainStore';
import defaultEditCacheData from '../store/utils/defaultEditCacheData';
import setRequest from './setReq';

const setStateToLoader = () => {
  mainStore.setState((state) => ({
    ...state,
    editCurrentMsg: 'loader',
  }));
};
const setStateToErrorMsg = () => {
  mainStore.setState((state) => ({
    ...state,
    editCurrentMsg: 'errorMsg',
  }));
};
const setStateToSuccessMsg = () => {
  mainStore.setState((state) => ({
    ...state,
    editCurrentMsg: 'successEdit',
  }));

  setTimeout(() => {
    mainStore.setState((state) => ({
      ...state,
      editCacheData: defaultEditCacheData,
      isFirstNav: false,
      editCurrentMsg: 'none',
    }));
    mainStore.getState().setCurrentPage('Home');
    window.location.reload();
  }, 1000);
};

const editRecipeAndSend = async () => {
  setStateToLoader();
  const result = await setRequest('editRecipe');
  if (result) {
    setStateToSuccessMsg();
  } else {
    setStateToErrorMsg();
  }
};

export default editRecipeAndSend;
