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
  if (cardThatWasClicked.classList.contains('website_card1')) {
    cardThatWasClicked.classList.add('website_cardleaf');
  }
   else if (cardThatWasClicked.classList.contains('website_card2')) {
    cardThatWasClicked.classList.add('website_cardmetro');
  }
  else if (cardThatWasClicked.classList.contains('website_card3')) {
    cardThatWasClicked.classList.add('website_cardcat');
  }
}

function checkClass() {
  if (openedCards.length === 2) {
    if ((openedCards[0].classList.contains('website_cardleaf')) && (openedCards[1].classList.contains('website_cardleaf')) ||
      (openedCards[0].classList.contains('website_cardmetro')) && (openedCards[1].classList.contains('website_cardmetro')) ||
      (openedCards[0].classList.contains('website_cardcat')) && (openedCards[1].classList.contains('website_cardcat'))) {
      console.log('yey')
      openedCards = [];
    } else {
      console.log('ney')
      openedCards[0].classList.remove('website_cardleaf', 'website_cardmetro', 'website_cardcat');
      openedCards[1].classList.remove('website_cardleaf', 'website_cardmetro', 'website_cardcat');
      openedCards = [];
    }
  } else {
    return undefined;
  }
}

clickOnCard();

//function to create double card images

// function createCardImages() {
//   let images = ['img/delicate.jpg', 'img/metro.jpg', 'img/yellow.jpg'];
//   return [...images, ...images];
// }

// let cardCovers = createCardImages();

// //function to create click listener for each card

// function clickedCard() {
//   cards.forEach((card) => {
//     card.addEventListener("click", function() {
//       displayCard(card);
//     })
//   });
// }

// clickedCard();

// function displayCard(card){
//   let counters = [];
//   card.classList.add('noshow');
//   counters++;
//   console.log(counters);
//   if (counters.length === 2) {
//     card.classList.remove('noshow');
//     card.classList.add('blabla');
//     counters = 0;
//     console.log(counters);
//   }
//   //x.classList.remove('website_card');
// }

//function to randomly pick card cover

// function randomizer(cardN) {
//   let randomCover = cardCovers[Math.floor(Math.random() * cardCovers.length)];
//   cardN.style.backgroundImage = 'url(' + randomCover + ')';
//   let removed = cardCovers.indexOf(randomCover);
//   let newCovers = cardCovers.splice(removed, 1);
//   console.log(newCovers, cardCovers)
// }

// randomizer();