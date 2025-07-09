const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');

// Set the total width of the slides container
slidesContainer.style.width = `${slides.length * 100}%`;

let index = 0;

function showSlide() {
  index++;
  if (index >= slides.length) index = 0;
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showSlide, 3000);
