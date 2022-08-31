const addStore = (set) => ({
  currentStep: 2,
  cacheData: {
    step1: {
      recipeName: '',
      recipeDes: '',
      category: '',
      difficulty: '',
      publisherName: '',
      imgFile: '',
    },
    step2: {
      number: 1,
      materials: [
        '',
      ],
    },
  },
  setCacheData: (newData) => {
    set((state) => ({ ...state, cacheData: { ...state.cacheData, ...newData } }));
  },
  setCurrentStep: (step) => {
    set((state) => ({ ...state, currentStep: step }));
  },
});

export default addStore;
