import getSearchDataFromServer from './utils/querySearch';

const searchStore = (set, get) => ({
  queriedData: [],
  getDataFromServer: (query) => {
    // first set page to order list with loader and when data resolved change them
    // await for that to resolve
    set((state) => ({ ...state, currentPage: 'Category' }));
    getSearchDataFromServer(query);
  },

});

export default searchStore;
