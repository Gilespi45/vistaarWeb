const circles = document.querySelectorAll('.circle-color');
const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function showCard(index) {
    cards.forEach((card, i) => {
        if (i === index) {
            card.classList.add('current');
        } else {
            card.classList.remove('current');
        }
    });
    circles.forEach((circle, i) => {
        if (i === index) {
            circle.classList.add('current');
        } else {
            circle.classList.remove('current');
        }
    });

    const cardContainer = document.querySelector('.card-container');
    const center = cardContainer.scrollLeft + cardContainer.offsetWidth / 2;
    let currentCard = cards[currentIndex];
    const cardCenter = currentCard.offsetLeft + currentCard.offsetWidth / 2;
    const scrollLeft = cardCenter - center;
    cardContainer.scrollLeft = scrollLeft;
}

document.getElementById("prev-button").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
});

document.getElementById("next-button").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
});

showCard(currentIndex);