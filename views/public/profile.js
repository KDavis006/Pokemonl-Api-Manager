const container = document.querySelector('.card-holder')
const next_prev = document.querySelector('.next-prev-buttons')
const searchButton = document.querySelector('.search-button')
const user = document.querySelector('.target').innerHTML;
const obj = await fetch('https://api.tcgdex.net/v2/en/cards', {
	method: "GET",
	headers: {'Content-Type': 'application/json'}
})
 const cards = await obj.json()

$('.unfavorite').on('click', (event) => {
  const cardId = event.currentTarget.id;

  const filteredCards = cards.filter((x) => {
    return x.id == cardId
  });


   const updateData = {
    $pull: {
      favorites: filteredCards, // The field 'cards' should match your database schema
    },
  };

  // Perform a fetch request to get card data
  fetch(`/update/${user}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(filteredCards)
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Data removed successfully');
    // Reload the page
    location.reload();
  })
})