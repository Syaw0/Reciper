const addStore = (set) => ({
  currentStep: 2,
  setCurrentStep: (step) => {
    set((state) => ({ ...state, currentStep: step }));
  },
});

export default addStore;
