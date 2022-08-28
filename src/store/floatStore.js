const floatStore = (set) => ({
  toggleFloat: false,
  currentFloat: 'none',
  setCurrentFloat: (floatType) => {
    set((state) => ({ ...state, currentFloat: floatType }));
  },
  setToggleFloat: (bool) => {
    set((state) => ({ ...state, toggleFloat: bool }));
  },

});

export default floatStore;
