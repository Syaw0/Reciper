const homeStore = (set) => ({
  homeCacheData: {},
  setHomeCacheData: (data) => {
    set((state) => ({ ...state, homeCacheData: data }));
  },
});

export default homeStore;
