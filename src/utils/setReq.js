const setRequest = () => new Promise((res) => {
  setTimeout(() => {
    res(true);
  }, 2000);
});

export default setRequest;
