const container = document.querySelector('.card-holder')
const next_prev = document.querySelector('.next-prev-buttons')
const searchButton = document.querySelector('.search-button')
const user = document.querySelector('.target').innerHTML;
console.log(user)
const obj = await fetch('https://api.tcgdex.net/v2/en/cards', {
	method: "GET",
	headers: {'Content-Type': 'application/json'}
})
 const cards = await obj.json()

const cardsPerPage = 100;
let currentPage = 0;

const getAllCards = async () => {
  container.innerHTML = '';
  next_prev.innerHTML = '';
  cards.sort((a, b) => a.name.localeCompare(b.name));

  const start = currentPage * cardsPerPage;
  const end = Math.min(start + cardsPerPage, cards.length);

  const images = cards.slice(start, end).map((x) => {
    if (x.image == undefined) {
      return '';
    } else {
      return `
      <div>
        <img class="cards" src="${x.image}/high.png" alt="${x.name}">
        <h6 class="card-title">${x.name}</h6>
        <button class="star btn btn-primary" id="${x.name}">s</button>
      </div>`;
    }
  });

  container.innerHTML += images.join('');

  createPaginationButtons();
};

const createPaginationButtons = () => {
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const prevButton = document.createElement('button');
  prevButton.textContent = 'Previous';
  prevButton.disabled = currentPage === 0;
  prevButton.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      getAllCards();
    }
  });

  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.disabled = currentPage === totalPages - 1;
  nextButton.addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      getAllCards();
    }
  });

  next_prev.appendChild(prevButton);
  next_prev.appendChild(nextButton);
};

// Call the initial function to load the first set of cards
getAllCards();

$(".search-Button").on('click', () => {
		container.innerHTML = ''

		const searchInput = document.querySelector('.searchInput').value;

    console.log(searchInput);

  // Filter cards based on the search term
  const filteredCards = cards.filter((x) => {
    return x.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  const images = filteredCards.map((x) => {
    if (x.image === undefined) {
      return ''; // Skip cards without images
    } else {
      return `
      <div>
        <img class="cards" src="${x.image}/high.png" alt="${x.name}">
        <h6 class="card-title">${x.name}</h6>
        <button class="btn btn-primary" id="${x.name}">s</button>
      </div>`;
    }
  });

  container.innerHTML = images.join('');
});

$('.star').on('click', (event) => {
  const cardId = event.currentTarget.id;

  console.log(cardId);

  const filteredCards = cards.filter((x) => {
    return x.name.toLowerCase().includes(cardId.toLowerCase());
  });

  console.log(filteredCards)

  // Perform a fetch request to get card data
  fetch(`/update/${user}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: {favorites: filteredCards}
  })
  console.log('it made it')
})