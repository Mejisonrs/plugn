// store components in variables
const page = document.querySelector(".page");
const wrapper = document.querySelector(".page__wrapper");

// ease value to be used in interpolation
const ease = 0.05; // 20%

// create an object to store scroll details
const scroll = {
  current: 0, // current scroll position
  target: 0, // target scroll position
  limit: 0 // limit of scroll
};

// function to update target scroll position
const updateTarget = (e) => {
  // set the target value to deltaY
  // which is distance covered by mouseWheel
  scroll.target += e.deltaY;
};

// create an event listener to listen for mouse-wheel
document.addEventListener("mousewheel", updateTarget);

// linear interpolation function
const lerp = (current, target) => {
  // get distance between current & target scroll points
  const distanceBetween = target - current;

  // get a percentage of that distance, in this case 20%
  const distanceToTravel = distanceBetween * ease;

  // add the % distance to the current scroll value
  return current + distanceToTravel;

  // shorthand for lerp is
  // current = current + ((target - current) * ease)
};

// clamping function to limit mousewheel values
const clamp = (min, max, value) => {
  const clamped = Math.min(Math.max(value, min), max);
  return clamped;
};

// main scroll function
const smoothScroll = () => {
  const maxScroll = wrapper.clientHeight - window.innerHeight;
  // clamp scroll target value
  scroll.target = clamp(0, maxScroll, scroll.target);

  const { current, target } = scroll;

  const transition = lerp(current, target);
  scroll.current = transition;

  // translate page wrapper based on lerped value
  wrapper.style.transform = `translateY(-${scroll.current}px)`;

  // use requestAnimationFrame with callback
  // to create an infinite loop of this function
  // that updates 60 times per second
  // or 30 times per second
  // depending on browser refresh rate
  window.requestAnimationFrame(smoothScroll);
};

// call smoothScroll to start loop
smoothScroll();
