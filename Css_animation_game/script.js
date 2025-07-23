const box = document.getElementById("box");
const scoreEl = document.getElementById("score");

let score = 0;

box.onclick = () => {
  score++;
  scoreEl.textContent = score;

  box.style.background = "#4caf50";
  setTimeout(() => (box.style.background = "#ff5252"), 120);
};

function moveBoxRandom() {
  const boxSize = 60;
  const maxLeft = window.innerWidth - boxSize;
  const maxTop = window.innerHeight - boxSize;

  const newLeft = Math.random() * maxLeft;
  const newTop = Math.random() * maxTop;

  box.style.left = `${newLeft}px`;
  box.style.top = `${newTop}px`;
}

moveBoxRandom();
const moveInterval = setInterval(moveBoxRandom, 1000);

window.addEventListener("resize", moveBoxRandom);
