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
    editCurrentMsg: 'errorEdit',
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
  }, 1000);
};

const editRecipeAndSend = async () => {
  setStateToLoader();
  await setRequest()
    .then(() => {
      setStateToSuccessMsg();
    }).catch(() => {
      setStateToErrorMsg();
    });

  console.log('edit and insert to server');
};

export default editRecipeAndSend;
