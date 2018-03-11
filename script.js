const cards = document.querySelectorAll('.website_card');
const game = document.querySelector('.website_game');

//function to create double card images

function createCardImages() {
  let images = ['img/delicate.jpg', 'img/metro.jpg', 'img/yellow.jpg'];
  return [...images, ...images];
}

let cardCovers = createCardImages();

//function to create click listener for each card

function clickCard() {
  cards.forEach((card) => {
    card.addEventListener("click", function() {
      cardClick(card);
    })
  });
}

clickCard();

//function to randomly pick card cover

function cardClick(cardN) {
  let rand = cardCovers[Math.floor(Math.random() * cardCovers.length)];
  cardN.style.backgroundImage = 'url(' + rand + ')';
  let removed = cardCovers.indexOf(rand);
  let newCovers = cardCovers.splice(removed, 1);
  console.log(newCovers, cardCovers)
}
/* TO DO:

function to count each click if clicks > 2 change all the covers back to no image