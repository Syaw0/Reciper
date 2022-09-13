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
  imgUrl: 'https://user-images.githubusercontent.com/78824988/188838110-1dc4e3d2-42c1-40d6-9e59-0b7ac3664cb0.jpeg',
  metaData: {
    prep: `${data.step1.prepTime}Min`,
    cook: `${data.step1.cookTime}Min`,
    servings: data.step1.serving,
  },
  difficulty: data.step1.difficulty,
  publisher: data.step1.publisherName,
});

export default transformAddCacheToNorm;
