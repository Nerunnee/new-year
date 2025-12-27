const tree = document.getElementById("tree");
const numberOftreeLights = 200;

const names = [
  "Баатарван",
  "Наранцогт",
  "Дэнни",
  "Оргил",
  "Алтанцоож",
  "Норовсүрэн",
  "Цолмонгэрэл",
  "Ганхөлөг",
  "Одбаяр",
  "Ариунзул",
  "Чингүүн",
  "Тэнгэр-Эрдэнэ",
  "Амаржаргал",
  "Сугар-Очир",
  "Мөнхдалай",
  "Чинбаяр",
  "Оюунжаргал",
  "Лхагвадорж",
  "Сүх-Очир",
  "Төгөлдөр",
  "Алтанцэцэг",
  "Батбилэг",
  "Мөнхжин",
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

for (let i = 0; i < numberOftreeLights; i++) {
  const star = document.createElement("div");
  star.className = "star";

  const progress = i / numberOftreeLights;
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
  nameElement.className = "star";
  nameElement.innerText = name;

  nameElement.style.fontSize = "16px";
  nameElement.style.fontWeight = "900";
  nameElement.style.color = "white";
  nameElement.style.width = "auto";
  nameElement.style.height = "auto";
  nameElement.style.background = "none";
  nameElement.style.boxShadow = "none";
  nameElement.style.whiteSpace = "nowrap";
  nameElement.style.textShadow = "0 0 0.8px black, 0 0 20px orange";

  // Модон дээр байрлуулах тооцоолол
  const progress = index / names.length;
  const yPos = progress * 380 + 20;
  const radius = progress * 160;
  const angle = index * 1.2;

  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;

  nameElement.style.setProperty("--x", `${x}px`);
  nameElement.style.setProperty("--z", `${z}px`);
  nameElement.style.top = `${yPos}px`;
  nameElement.style.left = `50%`;
  nameElement.style.setProperty("--delay", `${index * -0.4}s`);
  nameElement.style.animationDuration = `12s`;

  tree.appendChild(nameElement);
});
