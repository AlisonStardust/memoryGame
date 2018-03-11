const cards = document.querySelectorAll('.website_card');
const game = document.querySelector('.website_game');

function createCardImages() {
  let images = ['img/delicate.jpg', 'img/metro.jpg', 'img/yellow.jpg'];
  return [...images, ...images];
}

let cardCovers = createCardImages();

cards.forEach((card) => {
  card.addEventListener("click", function() {
    cardClick(card);
  })
});


function cardClick(cardN) {
  let rand = cardCovers[Math.floor(Math.random() * cardCovers.length)];
  cardN.style.backgroundImage = 'url(' + rand + ')';
  let removed = cardCovers.indexOf(rand);
  let newCovers = cardCovers.splice(removed, 1);
  console.log(newCovers, cardCovers)
}


  //card[0].classList.remove("website_card");
  //card[0].classList.add("mystyle");