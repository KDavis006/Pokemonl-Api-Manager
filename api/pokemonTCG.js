const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://pokemon-tcg-card-prices.p.rapidapi.com/set',
  headers: {
    'X-RapidAPI-Key': 'd250d7f3f5msh086163f67a24b9dp1188a0jsn1fd9fd91583b',
    'X-RapidAPI-Host': 'pokemon-tcg-card-prices.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
} catch (error) {
	console.error(error);
}