/* eslint-disable import/no-cycle */
import create from 'zustand';
import homeStore from './homeStore';
import searchStore from './searchStore';
import handleBreadsOutside from './utils/handleBreadsOutside';
import orderListStore from './orderLIstStore';
import floatStore from './floatStore';

export default create((set, get) => ({
  ...homeStore(set, get),
  ...searchStore(set, get),
  ...orderListStore(set, get),
  ...floatStore(set, get),
  breadCrumbs: [{ name: 'Home', level: 0 }],
  currentCategory: 'None',
  currentPage: 'Home',
  setBreadsCrumbs: (newBreads) => {
    set((state) => ({ ...state, breadCrumbs: newBreads }));
  },
  setCurrentPage: (pageName, newBreads) => {
    // handleBreadsInternal(pageName, newBreads);
    if (newBreads !== undefined) {
      // internal change in breadCrumbs
      set((state) => ({ ...state, currentPage: pageName, breadCrumbs: newBreads }));
    } else {
      // change happen outside of breadCrumbs
      const newbread = handleBreadsOutside(pageName);
      set((state) => ({ ...state, currentPage: pageName, breadCrumbs: newbread }));
    }
  },
  setCurrentCategory: (categoryId) => {
    set((state) => ({ ...state, currentCategory: categoryId }));
  },
}));
