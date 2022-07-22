const fetchRecomendedFood = () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const response = fetch(url).then((data) => data.json())
    .then((json) => json).catch((error) => console.log(error));
  return response;
};

export default fetchRecomendedFood;
