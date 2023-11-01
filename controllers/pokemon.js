const fetch = require('node-fetch');

const getOption = {
	method: "GET",
	headers: {'Content-Type': 'application/json'}
}

async function getPoke(req, res){
	const poke = await fetch('https://api.tcgdex.net/v2/en/cards', getOption)
	const cards = await poke.json();
}

module.exports = {getPoke};