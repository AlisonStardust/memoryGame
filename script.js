const cards = document.querySelectorAll('.card');
const game = document.querySelector('.website_game');

let openedCards = [];

function clickOnCard() {
  cards.forEach((card) => {
    card.addEventListener("click", function clickCard() {
      card.removeEventListener("click", clickCard);
      pushCard(card);
      classAdder(card);
      //displayCard(card);
      //setTimeout(checkClass, 2000);
      card.addEventListener("click", clickCard);
    }, false)
  });
}

function pushCard(cardThatWasClicked) {
  openedCards.push(cardThatWasClicked);
}

function classAdder(cardThatWasClicked) {
  cardThatWasClicked.classList.add('back');
}

clickOnCard();





// function displayCard(cardThatWasClicked) {
//   ((cardThatWasClicked.classList.contains('website_card1')) ? cardThatWasClicked.classList.add('website_cardleaf', 'shown') : undefined);
//   ((cardThatWasClicked.classList.contains('website_card2')) ? cardThatWasClicked.classList.add('website_cardmetro', 'shown') : undefined);
//   ((cardThatWasClicked.classList.contains('website_card3')) ? cardThatWasClicked.classList.add('website_cardcat', 'shown') : undefined);
// }

// function checkClass() {
//   if (openedCards.length === 2) {
//     if ((openedCards[0].classList.contains('website_cardleaf')) && (openedCards[1].classList.contains('website_cardleaf')) ||
//       (openedCards[0].classList.contains('website_cardmetro')) && (openedCards[1].classList.contains('website_cardmetro')) ||
//       (openedCards[0].classList.contains('website_cardcat')) && (openedCards[1].classList.contains('website_cardcat'))) {
//       openedCards = [];
//     } else {
//       openedCards[0].classList.remove('website_cardleaf', 'website_cardmetro', 'website_cardcat', 'shown');
//       openedCards[1].classList.remove('website_cardleaf', 'website_cardmetro', 'website_cardcat', 'shown');
//       openedCards = [];
//     }
//   } else {
//     return undefined;
//   }
// }

// function checkIfRepeats(arr1, arr2) {
//   let results = arr1.some(doesItInclude);
//   function doesItInclude(element) {
//     return arr2.includes(element);
//   }
//   return results;
// }








/*previous attempt


function checkIfRepeats(arr1, arr2) {
  let results = arr1.some(doesItInclude);
  function doesItInclude(element) {
    return arr2.includes(element);
  }
  return results;
}
console.log(checkIfRepeats(['Ala', 'ma', 'kota'], ['Kot', 'nie', 'ma', 'piłki']));
console.log(checkIfRepeats(['Ala', 'ma', 'kota', 'a', 'kot', 'ma', 'Alę'], ['foobar']));
function to create double card images



function createCardImages() {
  let images = ['img/delicate.jpg', 'img/metro.jpg', 'img/yellow.jpg'];
  return [...images, ...images];
}

let cardCovers = createCardImages();

//function to create click listener for each card

function clickedCard() {
  cards.forEach((card) => {
    card.addEventListener("click", function() {
      displayCard(card);
    })
  });
}

clickedCard();

function displayCard(card){
  let counters = [];
  card.classList.add('noshow');
  counters++;
  console.log(counters);
  if (counters.length === 2) {
    card.classList.remove('noshow');
    card.classList.add('blabla');
    counters = 0;
    console.log(counters);
  }
  //x.classList.remove('website_card');
}

function to randomly pick card cover

function randomizer(cardN) {
  let randomCover = cardCovers[Math.floor(Math.random() * cardCovers.length)];
  cardN.style.backgroundImage = 'url(' + randomCover + ')';
  let removed = cardCovers.indexOf(randomCover);
  let newCovers = cardCovers.splice(removed, 1);
  console.log(newCovers, cardCovers)
}

randomizer();
*/