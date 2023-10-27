const container = document.querySelector('.card-holder')
const obj = await fetch('https://api.tcgdex.net/v2/en/cards', {
	method: "GET",
	headers: {'Content-Type': 'application/json'}
})
 const cards = await obj.json()

const getAllCards = async() => {
	container.innerHTML = ''
  cards.sort((a, b) => a.name.localeCompare(b.name));

 const images = cards.map((x) => {
  if (x.image == undefined) {
			return ''
		} else {
		return `
    <div class="card-container">
    <img class="cards" src="${x.image}/high.png" alt="${x.name}">
    <h5 class="card-title">${x.name}</h5>
    <button class="Star-image>S</button>
    </div>`
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