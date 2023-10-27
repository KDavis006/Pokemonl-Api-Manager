const container = document.querySelector('.card-holder')
const obj = await fetch('https://api.tcgdex.net/v2/en/cards', {
	method: "GET",
	headers: {'Content-Type': 'application/json'}
})
 const cards = await obj.json()

const getAllCards = async() => {

 const cards = await obj.json()
	container.innerHTML = ''
 
 const images = cards.map((x) => {
  if (x.image == undefined) {
			return ''
		} else {
		return `<img class="cards" src="${x.image}/high.png" alt="${x.name}">`
		}
	})
 container.innerHTML += images.join('')
}

getAllCards();

const searchCards = async () => {
		container.innerHTML = ''

		const searchInput = document.getElementById('.searchInput');

  // Filter cards based on the search term
  const filteredCards = cards.filter((x) => {
    return x.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  const images = filteredCards.map((x) => {
    if (x.image === undefined) {
      return ''; // Skip cards without images
    } else {
      return `<img class="cards" src="${x.image}/high.png" alt="${x.name}">`;
    }
  });

  container.innerHTML = images.join('');
};