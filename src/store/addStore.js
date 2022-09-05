const addStore = (set) => ({
  currentStep: 1,
  cacheData: {
    step1: {
      recipeName: '',
      recipeDes: '',
      category: 'Pork',
      difficulty: 'Easy',
      publisherName: '',
      imgFile: '',
    },
    step2: {
      number: 1,
      materials: [
        '',
      ],
    },
    step3: {
      number: 1,
      steps: [
        '',
      ],
    },
    step4: {
      number: 1,
      tips: [
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
