const tree = document.getElementById("tree");
const scrollIntoView = document.getElementById("skills");
const numberOfTreeLights = 200;
const slides = document.getElementById("slides");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const theCounter = document.getElementById("counter");
const colorBox = document.getElementById("colorBox");

const names = [
  "Баатарван",
  "Наранцогт",
  "Алтанцоож",
  "Алтанцэцэг",
  "Амаржаргал",
  "Ариунзул",
  "Батбилэг",
  "Ганхөлөг",
  "Дэнни",
  "Лхагвадорж",
  "Мөнхдалай",
  "Мөнхжин",
  "Норовсүрэн",
  "Одбаяр",
  "Оргил",
  "Оюунжаргал",
  "Сугар-Очир",
  "Сүх-Очир",
  "Төгөлдөр",
  "Тэнгэр-Эрдэнэ",
  "Цолмонгэрэл",
  "Чинбаяр",
  "Чингүүн",
];

const randomGradientColors = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 80 + Math.floor(Math.random() * 20);
  const Lightness1 = 50 + Math.floor(Math.random() * 10);
  const Lightness2 = 70 + Math.floor(Math.random() * 10);
  return {
    color1: `hsl(${hue}, ${saturation}%, ${Lightness1}%)`,
    color2: `hsl(${hue}, ${saturation}%, ${Lightness2}%)`,
  };
};

for (let i = 0; i < numberOfTreeLights; i++) {
  const star = document.createElement("div");
  star.className = "star";
  const progress = i / numberOfTreeLights;
  const yPos = progress * 400;
  const radius = progress * 150;
  const angle = i * 0.5;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  const colors = randomGradientColors();

  star.style.setProperty("--x", `${x}px`);
  star.style.setProperty("--z", `${z}px`);
  star.style.top = `${yPos}px`;
  star.style.left = `50%`;
  star.style.setProperty("--delay", `${i * 0.05}s`);
  star.style.setProperty("--color1", colors.color1);
  star.style.setProperty("--color2", colors.color2);

  const lightSize = 4 + Math.random() * 4;
  star.style.width = `${lightSize}px`;
  star.style.height = `${lightSize}px`;
  star.style.animationDuration = `${10 + Math.random() * 10}s`;

  tree.appendChild(star);
}

names.forEach((name, index) => {
  const nameElement = document.createElement("div");
  nameElement.className = "name-label";
  nameElement.innerText = name;
  const progress = index / names.length;
  const yPos = 130 + progress * 270;
  const radius = 40 + progress * 70;
  const angle = index * 0.5;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;

  nameElement.style.setProperty("--x", `${x}px`);
  nameElement.style.setProperty("--z", `${z}px`);
  nameElement.style.top = `${yPos}px`;
  nameElement.style.left = `50%`;

  const appearanceDelay = 2.5 + index * 0.3;
  nameElement.style.animationDelay = `0s, ${appearanceDelay}s`;

  tree.appendChild(nameElement);
});

const scrollToSkills = () => {
  scrollIntoView.scrollIntoView({ behavior: "smooth" });
};

let currentSlide = 0;
const totalSlides = 4;
let counter = 0;

const updateSlide = () => {
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

const incrementCounter = () => {
  counter++;
  theCounter.textContent = counter;
};

const decrementCounter = () => {
  counter--;
  theCounter.textContent = counter;
};

const resetCounter = () => {
  counter = 0;
  theCounter.textContent = counter;
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
  colorBox.style.background = randomColor;
};

updateSlide();
