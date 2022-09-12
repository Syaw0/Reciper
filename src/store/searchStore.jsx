/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-cycle */
import SearchError from '../components/orderList/searchError';
import createRecipeCard from '../pages/utils/createRecipeCard';
import mainStore from './mainStore';
import getSearchDataFromServer from './utils/querySearch';

const searchStore = (set, get) => ({
  queriedData: '',
  searchError: {
    status: false,
    text: '',
  },
  getDataFromServer: async (query) => {
    // first set page to order list with loader and when data resolved change them
    // await for that to resolve
    mainStore.setState((state) => ({ ...state, isLoaderEnable: true }));
    // set((state) => ({ ...state, currentPage: 'Category' }));
    const result = await getSearchDataFromServer(query);
    set((state) => ({ ...state, isLoaderEnable: false }));
    if (result.status === 'founded') {
      get().setCurrentOrderList(createRecipeCard('normal', result.result));
      get().setCurrentPage('Searching');
    } else {
      get().setCurrentPage('Searching');
      set((state) => ({
        ...state,
        searchError: {
          ...result,
        },
      }));
      get().setCurrentOrderList(<SearchError data={result.text} />);
    }
  },

});

export default searchStore;
