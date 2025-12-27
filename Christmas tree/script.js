const tree = document.getElementById("tree");
const numberOftreeLights = 200;

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
  star.classList = "star";

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
