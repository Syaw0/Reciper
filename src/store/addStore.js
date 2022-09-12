const addStore = (set) => ({
  finalStepComponent: 'finalMsg',
  currentStep: 5,
  cacheData: {
    step1: {
      recipeName: 's',
      recipeDes: 's',
      category: 'Pork',
      difficulty: 'Easy',
      publisherName: 's',
      imgFile: '',
    },
    step2: {
      number: 1,
      materials: [
        's',
      ],
    },
    step3: {
      number: 1,
      steps: [
        's',
      ],
    },
    step4: {
      number: 1,
      tips: [
        's',
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
