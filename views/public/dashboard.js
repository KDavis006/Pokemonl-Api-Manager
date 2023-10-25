
const getAllCards = async() => {
 const allCards = await fetch('https://api.tcgdex.net/v2/en/cards')
 .then(response => response.json())
 console.log(allCards)
}

getAllCards();