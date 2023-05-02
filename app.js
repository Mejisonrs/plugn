const intro = document.querySelectorAll('.headline-slider');
const prev = document.querySelector('.headline-prev');
const next = document.querySelector('.headline-next');

intro.forEach((gallery) => {
  const items = gallery.querySelectorAll('.headline-slide');
  const length = items.length;
  let index = 2;

  function change(newIndex) {
    items[index].classList.remove('headline-first');
    items[newIndex].classList.add('headline-first');
    index = newIndex;
  };
  items[2].classList.add('headline-first');

  prev.addEventListener('click', () => {
    if (index > 2) {
      change(index - 1);
    }
  });

  next.addEventListener('click', () => {
    if (index < length - 1) {
      change(index + 1);
    }
  });
});
