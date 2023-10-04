const TCGdex = require('@tcgdex/sdk').default

const readPokemon = async (setName, cardNumber) => {
// Instantiate the SDK
const tcgdex = new TCGdex('en');

// go into an async context
	// You can also get the same result using
	const card = await tcgdex.fetch('sets', setName, cardNumber);
 console.log(card)
}

const readAllPokemon = async () => {
 // Instantiate the SDK
const tcgdex = new TCGdex('en');

// go into an async context
	// You can also get the same result using
	const card = await tcgdex.fetch('sets', 'Darkness Ablaze')
 console.log(card)
}

module.exports = {readPokemon, readAllPokemon};