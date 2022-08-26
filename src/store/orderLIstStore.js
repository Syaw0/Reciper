const orderListStore = (set, get) => ({
  currentOrderList: [],
  setCurrentOrderList: (newList) => {
    set((state) => ({ ...state, currentOrderList: newList }));
  },
});
export default orderListStore;
