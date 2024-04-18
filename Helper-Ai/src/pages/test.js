const anotherStuff = async () => {
  console.log("anotherStuffff");
  const secondPrompt = `Wirte a recipe about the food i am going to provide you. Your responce should contain external link to get more info, and instructions and your responce must only be in this format:
{
  name: "",
  id: 1,
  externalLink: "",
  instructions: ""
}.The name of the food and the id are`;
  for (let i = 0; i < recipeArray.length; i++) {
    const object = {
      ...option,
      prompt: `${secondPrompt} ${recipeArray[i]}, ${i + 1}.`,
    };
    try {
      const response = await openai.createCompletion(object);
      console.log(response.data.choices[0].text);
      setRecipeArrayB((prevState) => [
        ...prevState,
        ...response.data.choices[0].text,
      ]);
    } catch (error) {
      console.error;
    }
  }
  console.log("we are in the second");
  console.log(typeof recipeArrayB);
  console.log(recipeArrayB);
  setShowResultB(true);
};
