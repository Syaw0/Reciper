/* eslint-disable no-empty */
/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
import create from 'zustand';
import homeStore from './homeStore';
import searchStore from './searchStore';
import handleBreadsOutside from './utils/handleBreadsOutside';
import orderListStore from './orderLIstStore';
import floatStore from './floatStore';
import addStore from './addStore';
import addNavigationCheck from './utils/addNavigationCheck';
import editStore from './editStore';
import getPageData from './utils/getPageData/getPageData';

export default create((set, get) => ({
  ...homeStore(set, get),
  ...searchStore(set, get),
  ...orderListStore(set, get),
  ...floatStore(set, get),
  ...addStore(set, get),
  ...editStore(set, get),
  breadCrumbs: [{ name: 'Home', level: 0 }],
  currentTheme: 'light',
  currentCategory: 'None',
  currentPage: 'null',
  isLoaderEnable: false,
  getPageDataError: false,
  recipeCacheData: {},
  currentRecipeId: '',
  currentRecipeCategory: '',
  recipeCurrentMsg: 'null',
  checkStrictFile: true,
  setCurrentRecipeId: (recipeId) => {
    set((state) => ({ ...state, currentRecipeId: recipeId }));
  },
  setCurrentRecipeCategory: (recipeCategory) => {
    set((state) => ({ ...state, currentRecipeCategory: recipeCategory }));
  },
  setBreadsCrumbs: (newBreads) => {
    set((state) => ({ ...state, breadCrumbs: newBreads }));
  },
  setCurrentPage: async (pageName, newBreads) => {
    // check if we are not during adding or editing recipe

    if (!get().getPageDataError) {
      if (get().currentPage === pageName && get().currentPage !== 'Recipe') { return; }
    }
    if (addNavigationCheck(get().currentPage, pageName)) {
      return;
    }

    if (await getPageData(pageName)) {
    } else {
      set((state) => ({
        ...state,
        isLoaderEnable: false,
        getPageDataError: true,
      }));
    }

    if (newBreads !== undefined) {
      // internal change in breadCrumbs
      set((state) => ({
        ...state,
        currentPage: pageName,
        isFirstNav: true,
        breadCrumbs: newBreads,
        isLoaderEnable: false,
      }));
    } else {
      // change happen outside of breadCrumbs
      const newbread = handleBreadsOutside(pageName);
      set((state) => ({
        ...state,
        currentPage: pageName,
        isFirstNav: true,
        breadCrumbs: newbread,
        isLoaderEnable: false,
      }));
    }
    window.scrollTo(0, 0);
    // console.clear();
  },
  setCurrentCategory: (categoryId) => {
    set((state) => ({ ...state, currentCategory: categoryId }));
  },
}));
