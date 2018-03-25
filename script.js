//1 = leaf 2 = metro 3 = cat

const cards = document.querySelectorAll('.website_card');
const game = document.querySelector('.website_game');

let openedCards = [];

function clickOnCard() {
  cards.forEach((card) => {
    card.addEventListener("click", function() {
      displayCard(card);
      setTimeout(checkClass, 3000);
    })
  });
}

function displayCard(cardThatWasClicked) {
  openedCards.push(cardThatWasClicked);
  ((cardThatWasClicked.classList.contains('website_card1')) ? cardThatWasClicked.classList.add('website_cardleaf', 'shown') : undefined);
  ((cardThatWasClicked.classList.contains('website_card2')) ? cardThatWasClicked.classList.add('website_cardmetro', 'shown') : undefined);
  ((cardThatWasClicked.classList.contains('website_card3')) ? cardThatWasClicked.classList.add('website_cardcat', 'shown') : undefined);
}

function checkClass() {
  if (openedCards.length === 2) {
    if ((openedCards[0].classList.contains('website_cardleaf')) && (openedCards[1].classList.contains('website_cardleaf')) ||
      (openedCards[0].classList.contains('website_cardmetro')) && (openedCards[1].classList.contains('website_cardmetro')) ||
      (openedCards[0].classList.contains('website_cardcat')) && (openedCards[1].classList.contains('website_cardcat'))) {
      openedCards = [];
    } else {
      openedCards[0].classList.remove('website_cardleaf', 'website_cardmetro', 'website_cardcat');
      openedCards[1].classList.remove('website_cardleaf', 'website_cardmetro', 'website_cardcat');
      openedCards = [];
    }
  } else {
    return undefined;
  }
}

clickOnCard();