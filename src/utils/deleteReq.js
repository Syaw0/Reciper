const deleteReq = async (recipeId, category) => {
  try {
    const body = {
      id: recipeId,
      category,
    };
    const response = await fetch(`http://localhost:8080/delete${recipeId.split('#')[1]}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (data.status) {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
};

export default deleteReq;
