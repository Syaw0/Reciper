const transformAddCacheToNorm = (data) => ({
  name: data.step1.recipeName,
  description: data.step1.recipeDes,
  category: data.step1.category,
  materials: [
    ...data.step2.materials,
  ],
  steps: [
    ...data.step3.steps,
  ],
  tips: [
    ...data.step4.tips,
  ],
  imgUrl: '',
  metaData: {
    prep: `${data.step1.prepTime}`,
    cook: `${data.step1.cookTime}`,
    servings: data.step1.serving,
  },
  difficulty: data.step1.difficulty,
  publisher: data.step1.publisherName,
});

export default transformAddCacheToNorm;
