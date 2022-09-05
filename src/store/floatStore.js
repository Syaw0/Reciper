const floatStore = (set) => ({
  toggleFloat: false,
  currentFloat: 'none',
  isFirstNav: true,
  nextPage: '',
  textValue: {
    alert: '',
    no: '',
    yes: '',
  },
  setCurrentFloat: (floatType) => {
    set((state) => ({ ...state, currentFloat: floatType }));
  },
  setToggleFloat: (bool) => {
    set((state) => ({ ...state, toggleFloat: bool }));
  },
  setTextValue: (newText) => {
    set((state) => ({ ...state, textValue: newText }));
  },
  setIsFirstNav: (bool) => {
    set((state) => ({ ...state, isFirstNav: bool }));
  },
  setNextPage: (next) => {
    set((state) => ({ ...state, nextPage: next }));
  },
});

export default floatStore;
