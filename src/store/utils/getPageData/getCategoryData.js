const getCategoryData = async () => {
  const response = await fetch('http://localhost:8080/categories');
  const data = await response.json();
  return Object.values(data);
};

export default getCategoryData;
