document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("current-year-plus-1").textContent = new Date().getFullYear()+1;

// Carrousel automatique
const carrousel = document.querySelector('.carrousel-items');
const items = document.querySelectorAll('.item');
let index = 0;

function updateCarrousel() {
  const carrouselWidth = document.querySelector('.carrousel').offsetWidth;
  carrousel.style.transform = `translateX(-${index * carrouselWidth}px)`;
}

setInterval(() => {
  index = (index + 1) % items.length;
  updateCarrousel();
}, 3000);

window.addEventListener('resize', updateCarrousel);