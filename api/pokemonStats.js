const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://pokedex2.p.rapidapi.com/pokedex/uk',
  headers: {
    'X-RapidAPI-Key': 'd250d7f3f5msh086163f67a24b9dp1188a0jsn1fd9fd91583b',
    'X-RapidAPI-Host': 'pokedex2.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
} catch (error) {
	console.error(error);
}