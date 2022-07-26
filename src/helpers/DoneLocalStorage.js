export function setDoneRecipe(recipe, op) {
  if (!localStorage.getItem('doneRecipes')) {
    localStorage.setItem('doneRecipes', JSON.stringify([]));
  }

  const savedList = JSON.parse(localStorage.getItem('doneRecipes'));
  const oldList = savedList.filter((item) => item.id !== recipe.id);
  let newList = [];
  if (op === 'Add') {
    if (oldList) newList = [...oldList, recipe];
    else newList = [recipe];
  } else if (op === 'Remove') newList = oldList;
  localStorage.setItem('doneRecipes', JSON.stringify(newList));
}

export function getDoneRecipes() {
  if (!localStorage.getItem('doneRecipes')) {
    localStorage.setItem('doneRecipes', JSON.stringify([]));
  }
  const response = JSON.parse(localStorage.getItem('doneRecipes'));
  return response;
}
