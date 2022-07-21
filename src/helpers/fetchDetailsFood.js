const fetchDetailsFood = (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = fetch(url).then((data) => data.json())
    .then((json) => json).catch((error) => console.log(error));
  return response;
};

export default fetchDetailsFood;
