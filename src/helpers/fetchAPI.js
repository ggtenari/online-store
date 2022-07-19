const fetchAPI = (url) => {
  const response = fetch(url).then((data) => data.json())
    .then((json) => json).catch((error) => console.log(error));
  return response;
};

export default fetchAPI;
