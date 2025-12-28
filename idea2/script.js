const scrollToSkills = () => {
  document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
};

let currentSlide = 0;
const totalSlides = 4;

let counter = 0;

const incrementCounter = () => {
  counter++;
  document.getElementById("counter").textContent = counter;
};

const decrementCounter = () => {
  counter--;
  document.getElementById("counter").textContent = counter;
};

const resetCounter = () => {
  counter = 0;
  document.getElementById("counter").textContent = counter;
};

const changeColor = () => {
  const colors = [
    "#ff6b6b",
    "#4ecdc4",
    "#ffe66d",
    "#a8e6cf",
    "#ffd3b6",
    "#ffaaa5",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("colorBox").style.background = randomColor;
};

const updateSlide = () => {
  const slides = document.getElementById("slides");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  slides.style.transform = `translateX(-${currentSlide * 100}%)`;

  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === totalSlides - 1;
};

const nextSlide = () => {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSlide();
  }
};

const prevSlide = () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlide();
  }
};

updateSlide();
