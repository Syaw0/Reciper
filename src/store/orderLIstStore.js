const orderListStore = (set) => ({
  currentOrderList: [],
  setCurrentOrderList: (newList) => {
    set((state) => ({ ...state, currentOrderList: newList }));
  },
});
export default orderListStore;
