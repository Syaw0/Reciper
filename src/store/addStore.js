const addStore = (set) => ({
  finalStepComponent: 'finalMsg',
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
  setFinalComponent: (component) => {
    set((state) => ({ ...state, finalStepComponent: component }));
  },
  setCacheData: (newData) => {
    set((state) => ({ ...state, cacheData: { ...state.cacheData, ...newData } }));
  },
  setCurrentStep: (step) => {
    set((state) => ({ ...state, currentStep: step }));
  },
});

export default addStore;
