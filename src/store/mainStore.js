/* eslint-disable import/no-cycle */
import create from 'zustand';
import homeStore from './homeStore';
import searchStore from './searchStore';
import handleBreadsOutside from './utils/handleBreadsOutside';
import orderListStore from './orderLIstStore';
import floatStore from './floatStore';
import addStore from './addStore';
import addNavigationCheck from './utils/addNavigationCheck';

export default create((set, get) => ({
  ...homeStore(set, get),
  ...searchStore(set, get),
  ...orderListStore(set, get),
  ...floatStore(set, get),
  ...addStore(set, get),
  breadCrumbs: [{ name: 'Home', level: 0 }],
  currentCategory: 'None',
  currentPage: 'Home',
  setBreadsCrumbs: (newBreads) => {
    set((state) => ({ ...state, breadCrumbs: newBreads }));
  },
  setCurrentPage: (pageName, newBreads) => {
    // check if we are not during adding or editing recipe
    if (addNavigationCheck(get().currentPage, pageName)) {
      return;
    }
    // handleBreadsInternal(pageName, newBreads);
    if (newBreads !== undefined) {
      // internal change in breadCrumbs
      set((state) => ({
        ...state, currentPage: pageName, isFirstNav: true, breadCrumbs: newBreads,
      }));
    } else {
      // change happen outside of breadCrumbs
      const newbread = handleBreadsOutside(pageName);
      set((state) => ({
        ...state, currentPage: pageName, isFirstNav: true, breadCrumbs: newbread,
      }));
    }
  },
  setCurrentCategory: (categoryId) => {
    set((state) => ({ ...state, currentCategory: categoryId }));
  },
}));
