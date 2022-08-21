import create from 'zustand';
import homeStore from './homeStore';
import searchStore from './searchStore';
import handleBreadsOutside from './utils/handleBreadsOutside';

export default create((set, get) => ({
  ...homeStore(set, get),
  ...searchStore(set, get),
  breadCrumbs: [{ name: 'Home', level: 0 }],
  currentPage: 'Home',
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
}));
