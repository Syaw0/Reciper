const transformRecipeDataToEdit = (data) => ({
  naming: {
    recipeName: data.name,
    recipeDes: data.description,
    category: data.category,
    difficulty: data.difficulty,
    publisherName: data.publisher,
    imgFile: data.imgUrl,
    serving: data.metaData.servings, //
    prepTime: data.metaData.prep, //
    cookTime: data.metaData.cook, //
    imgLink: data.imgUrl,
  },
  materials: {
    number: data.materials.length,
    values: [
      ...data.materials,
    ],
  },
  steps: {
    number: data.steps.length,
    values: [
      ...data.steps,
    ],
  },
  tips: {
    number: data.tips.length,
    values: [
      ...data.tips,
    ],
  },
});

export default transformRecipeDataToEdit;
