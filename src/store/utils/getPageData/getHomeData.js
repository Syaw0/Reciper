const getHomeData = async () => {
  const response = await fetch('http://localhost:8080/home');
  const data = await response.json();
  return data;
};

export default getHomeData;
