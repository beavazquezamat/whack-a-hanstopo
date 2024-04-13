const INTERVAL_TIME = 1000;
const GAME_TIME = 15000;
let holes$ = document.querySelectorAll(".hole");
let timer = null;
let score;
let timeout = null;
let startButton$ = document.querySelector("#startButton");
startButton$.addEventListener("click", init);

addMoleEvent();
function addMoleEvent() {
  let moles$ = document.querySelectorAll(".mole");
  for (let mole$ of moles$) {
    mole$.addEventListener("click", whackHans);
  }
}

function init() {
  if (timer !== null) {
    clearInterval(timer);
  }
  if (timeout !== null) {
    clearTimeout(timeout);
  }
  score = 0;
  writeScore();
  timer = setInterval(showHans, INTERVAL_TIME);
  timeout = setTimeout(endGame, GAME_TIME);
  setTimeout(endGame, GAME_TIME);
  showHans();
}

function endGame() {
  hideAllHans();
  clearInterval(timer);
  alert("Has conseguido " + score + " puntos");
}

function writeScore() {
  let score$ = document.querySelector(".score");
  score$.textContent = score;
}

function showHans() {
  let hole$ = getRandomHole();
  hideAllHans();
  hole$.classList.add("up");
}

function hideAllHans() {
  for (let hole$ of holes$) {
    hole$.classList.remove("up");
  }
}

function getRandomHole() {
  let randomIndex = Math.floor(Math.random() * holes$.length);
  return holes$[randomIndex];
}

function whackHans() {
  score++;
  writeScore();
  this.parentNode.classList.remove("up");
}
