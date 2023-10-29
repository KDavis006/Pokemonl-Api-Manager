const container = document.querySelector('.card-holder')
const next_prev = document.querySelector('.next-prev-buttons')
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
        <img class="cards" src="${x.image}/high.png" alt="${x.name}">`;
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