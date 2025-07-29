const slides = document.querySelectorAll('.slide');
const sliderContainer = document.querySelector('.slides');

// Set the total width of the slides container
sliderContainer.style.width = `${slides.length * 100}%`;


let index = 0;

function showSlide() {
  index++;
  if (index >= slides.length) index = 0;
  sliderContainer.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showSlide, 3000);

