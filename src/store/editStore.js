const editStore = (set) => ({
  editCurrentMsg: 'none',
  editCacheData: {
    naming: {
      recipeName: '',
      recipeDes: '',
      category: '',
      difficulty: '',
      publisherName: '',
      serving: '', //
      prepTime: '', //
      cookTime: '', //
      imgFile: '',
      imgLink: '',
    },
    materials: {
      number: 1,
      values: [
        '',
      ],
    },
    steps: {
      number: 1,
      values: [
        '',
      ],
    },
    tips: {
      number: 1,
      values: [
        '',
      ],
    },
  },
  setEditCurrentMsg: (msg) => {
    set((state) => ({ ...state, editCurrentMsg: msg }));
  },
  setEditCacheData: (newData) => {
    set((state) => ({ ...state, editCacheData: { ...state.editCacheData, ...newData } }));
  },
});

export default editStore;
