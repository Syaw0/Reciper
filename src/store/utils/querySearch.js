const getSearchDataFromServer = async (query) => {
  try {
    const response = await fetch(`http://localhost:8080/s=${query}`);
    const data = await response.json();
    if (data.status === 'not Found') {
      return {
        status: false,
        text: "can't found anything relate to your keyword!",
      };
    }
    return data;
  } catch (err) {
    return {
      status: false,
      text: 'error during operation please try again!',
    };
  }
};

export default getSearchDataFromServer;
