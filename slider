const slides = document.querySelectorAll('.headline-add');
const images = document.querySelectorAll('.headline-item');
const prevBtn = document.querySelector('.headline-prev');
const nextBtn = document.querySelector('.headline-next');
let index = 0;

updateSlide();

function updateSlide() {
  slides.forEach((slide, i) => {
    slide.innerHTML = images[(index + i) % images.length].innerHTML;
  });

  images.forEach((img) => img.classList.remove('selected'));
  images[index].classList.add('selected');

  images[index].scrollIntoView({ 
    behavior: 'smooth', 
    block: 'nearest', 
    inline: 'start' 
  });
}

images.forEach((img, i) => {
  img.addEventListener('click', () => {
    index = i;
    updateSlide();
  });
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  updateSlide();
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % images.length;
  updateSlide();
});
