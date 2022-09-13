const transformEditCacheToNorm = (id, category, data) => ({
  id,
  category,
  editedRecipe: {
    name: data.naming.recipeName,
    description: data.naming.recipeDes,
    category: data.naming.category,
    materials: [
      ...data.materials.values,
    ],
    steps: [
      ...data.steps.values,
    ],
    tips: [
      ...data.tips.values,
    ],
    imgUrl: data.naming.imgLink,
    metaData: {
      prep: data.naming.prepTime,
      cook: data.naming.cookTime,
      servings: data.naming.serving,
    },
    recipeId: id,
    difficulty: data.naming.difficulty,
    publisher: data.naming.publisherName,
  },
});

export default transformEditCacheToNorm;
