const editStore = (set) => ({
  editCurrentMsg: 'none',
  editCacheData: {
    naming: {
      recipeName: 'chicken',
      recipeDes: 'something good',
      category: 'Pork',
      difficulty: 'Easy',
      publisherName: 'Haji',
      imgFile: 'bela bela',
    },
    materials: {
      number: 1,
      values: [
        'chicken',
        'water',
      ],
    },
    steps: {
      number: 1,
      values: [
        'bring water to ...',
        'put chicken to water',
      ],
    },
    tips: {
      number: 1,
      values: [
        'don`t increase heat above 130c',
        'chicken with potato is great :)',
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
