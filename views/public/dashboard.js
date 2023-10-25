// import TCGdex from '@tcgdex/sdk';

// const tcgdex = new TCGdex();

const getAllCards = async() => {
 await axios.get('https://api.tcgdex.net/v2/en/cards')
 .then((res) => {
  console.log(res)
 })
}

getAllCards();