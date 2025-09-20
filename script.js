// script.js
const carousel = document.getElementById('carousel');
const dots = document.querySelectorAll('.dot');

const cardsPerView = 5;
let currentIndex = 0;
const cardWidth = 160 + 18; // card width + gap

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentIndex = i;
    updateCarousel();
  });
});

// Responsive dots: calculate dot count dynamically
function updateDots() {
  const totalCards = carousel.children.length;
  const dotCount = Math.max(1, totalCards - cardsPerView + 1);
  const dotsContainer = document.getElementById('dots');
  dotsContainer.innerHTML = '';
  for (let i = 0; i < dotCount; i++) {
    const dotEl = document.createElement('span');
    dotEl.classList.add('dot');
    if (i === currentIndex) dotEl.classList.add('active');
    dotEl.addEventListener('click', () => {
      currentIndex = i;
      updateCarousel();
    });
    dotsContainer.appendChild(dotEl);
  }
}

window.addEventListener('resize', updateDots);
document.addEventListener('DOMContentLoaded', () => {
  updateDots();
  updateCarousel();
});

