/* eslint-disable no-restricted-exports */
import mainStore from '../store/mainStore';
import defaultAddCacheData from '../store/utils/defaultAddCacheData';
import setRequest from './setReq';

const setStateToLoader = () => {
  mainStore.setState((state) => ({
    ...state,
    finalStepComponent: 'loader',
  }));
};
const setStateToErrorMsg = () => {
  mainStore.setState((state) => ({
    ...state,
    finalStepComponent: 'errorMsg',
  }));
};
const setStateToSuccessMsg = () => {
  mainStore.setState((state) => ({
    ...state,
    finalStepComponent: 'successMsg',
  }));

  setTimeout(() => {
    mainStore.setState((state) => ({
      ...state,
      cacheData: defaultAddCacheData,
      currentStep: 1,
      currentPage: 'Home',
      finalStepComponent: 'finalMsg',
    }));
  }, 1000);
};

const insertRecipeToServer = async () => {
  setStateToLoader();
  await setRequest()
    .then(() => {
      setStateToSuccessMsg();
    }).catch(() => {
      setStateToErrorMsg();
    });

  console.log('inserting to server');
};

export default insertRecipeToServer;
