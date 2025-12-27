// Loading screen code animation
const codeLines = [
  '<span class="comment">// Our Amazing Team! 🎉</span>',
  '<span class="keyword">const</span> <span class="variable">teamMembers</span> = [',
  '  <span class="string">"Member 1"</span>,',
  '  <span class="string">"Member 2"</span>,',
  '  <span class="string">"Member 3"</span>,',
  '  <span class="string">"Member 4"</span>',
  "];",
  "",
  '<span class="keyword">console</span>.<span class="function">log</span>(<span class="string">"Hello to coding world"</span>);',
  "",
  '<span class="comment">// Let\'s show what we built! 🚀</span>',
];

let currentLine = 0;
const codeContent = document.getElementById("codeContent");

function typeCode() {
  if (currentLine < codeLines.length) {
    const lineDiv = document.createElement("div");
    lineDiv.className = "code-line";
    lineDiv.innerHTML = codeLines[currentLine];
    lineDiv.style.animationDelay = "0s";
    codeContent.appendChild(lineDiv);
    currentLine++;
    setTimeout(typeCode, 200);
  } else {
    // Show the start button after code animation completes
    setTimeout(() => {
      document.getElementById("startButton").classList.add("show");
    }, 500);
  }
}

function startPresentation() {
  const loadingScreen = document.getElementById("loadingScreen");
  const mainContent = document.getElementById("mainContent");

  loadingScreen.classList.add("hidden");
  mainContent.classList.add("visible");
  document.body.classList.remove("loading"); // Enable scrolling
}

// Start typing animation when page loads
window.addEventListener("load", () => {
  document.body.classList.add("loading"); // Disable scrolling initially
  setTimeout(typeCode, 500);
});

// Add your class names here
const classmates = [
  "Alice Johnson",
  "Bob Smith",
  "Charlie Brown",
  "Diana Prince",
  "Emma Watson",
  "Frank Zhang",
  "Grace Lee",
  "Henry Miller",
  "Iris Chen",
  "Jack Robinson",
  "Kate Wilson",
  "Liam Anderson",
  "Maria Garcia",
  "Noah Davis",
  "Olivia Martinez",
];

const teacher = "Mr. Johnson"; // Change to your teacher's name

let namesShown = false;

// Predefined positions for names on the tree
const namePositions = [
  { top: 100, left: 150 },
  { top: 140, left: 300 },
  { top: 180, left: 120 },
  { top: 220, left: 350 },
  { top: 260, left: 100 },
  { top: 300, left: 240 },
  { top: 340, left: 380 },
  { top: 380, left: 90 },
  { top: 420, left: 270 },
  { top: 460, left: 400 },
  { top: 200, left: 210 },
  { top: 320, left: 320 },
  { top: 400, left: 180 },
  { top: 500, left: 240 },
  { top: 530, left: 350 },
];

function scrollToSkills() {
  document
    .querySelector(".skills-section")
    .scrollIntoView({ behavior: "smooth" });
}

function showNames() {
  if (namesShown) return; // Prevent multiple clicks

  namesShown = true;
  const tree = document.getElementById("christmasTree");

  // Add teacher name at the top
  const teacherOrnament = document.createElement("div");
  teacherOrnament.className = "name-ornament teacher";
  teacherOrnament.textContent = `👨‍🏫 ${teacher}`;
  teacherOrnament.style.top = "240px";
  teacherOrnament.style.left = "50%";
  teacherOrnament.style.transform = "translateX(-50%) scale(0)";
  tree.appendChild(teacherOrnament);

  setTimeout(() => {
    teacherOrnament.classList.add("show");
    teacherOrnament.style.transform = "translateX(-50%) scale(1) rotate(-5deg)";
  }, 100);

  // Add classmate names
  classmates.forEach((name, index) => {
    const nameOrnament = document.createElement("div");
    nameOrnament.className = "name-ornament";
    nameOrnament.textContent = name;

    // Use predefined positions
    const pos = namePositions[index % namePositions.length];
    nameOrnament.style.top = pos.top + "px";
    nameOrnament.style.left = pos.left + "px";

    tree.appendChild(nameOrnament);

    // Stagger the animation
    setTimeout(() => {
      nameOrnament.classList.add("show");
    }, 300 + index * 150);
  });
}

function closePopup() {
  // Not needed anymore but keeping for compatibility
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
