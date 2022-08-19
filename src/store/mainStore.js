import create from 'zustand';
import homeStore from './homeStore';
import searchStore from './searchStore';


export default create((set, get) => ({
  ...homeStore(set, get),
  ...searchStore(set, get),
  currentPage: 'Home',
  setCurrentPage: (pageName) => {
    console.log(get())
    set((state) => ({ ...state, currentPage: pageName }));
  },
}));
