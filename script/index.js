// DOM REFERENCES - GENERAL
const startScrn = document.getElementById("start-screen");
const gameScrn = document.getElementById("game-screen");
const resultScrn = document.getElementById("results-page");
const ribbon = document.getElementById("ribbon");
const headerText = document.getElementById("header-text");
const winner = document.getElementById("winner");

let playerIcon = document.getElementById("player-icon");
let cpuIcon = document.getElementById("cpu-icon");
let playerScoreboard = document.getElementById("player-score");
let cpuScoreboard = document.getElementById("cpu-score");
let round = document.getElementById("round-number");

// DOM REFERENCES - GAME BUTTONS
const startBtn = document.getElementById("start-game");
const rock = document.getElementById("rock-button");
const paper = document.getElementById("paper-button");
const scissors = document.getElementById("scissors-button");
const playAgain = document.getElementById("play-again");

// VARIABLES
let choices = ["rock", "paper", "scissors"];
let icons = [
  "../images/Rock-Icon.svg",
  "../images/Paper-Icon.svg",
  "../images/Scissors-Icon.svg",
];

/*

TO DO:

1) make the RPS icons
2) make an array with the links to the images (decontruct)
3) set the playerIcon/cpuIcon after the Choices are made


*/

let playerChoice = "";
let cpuChoice = "";
let roundCounter = 1;
let playerScore = 0;
let cpuScore = 0;

// DEFAULT VALUES
headerText.innerHTML = `Rock, Paper, Scissors!`;
round.innerHTML = roundCounter;
playerScoreboard.textContent = playerScore;
cpuScoreboard.textContent = cpuScore;

/*=============
  FUNCTIONS
===============*/

// Generate random number for cpu choice
const randomNumber = () => {
  return Math.floor(Math.random() * 3);
};

// start the game
const startGame = () => {
  startScrn.classList.add("hidden");
  gameScrn.classList.remove("hidden");
  headerText.innerHTML = `Make your Choice`;
};

startBtn.addEventListener("click", startGame);

/*================
  MAIN GAME LOGIC
=================*/

// 1) capture the player's choice

rock.addEventListener("click", () => {
  playerChoice = choices[0];
  playerIcon.innerHTML = `
      <img src=${icons[0]} class="icons">
      `;
  cpuMove();
  displayResults();
});

paper.addEventListener("click", () => {
  playerChoice = choices[1];
  playerIcon.innerHTML = `
      <img src=${icons[1]} class="icons">
      `;
  cpuMove();
  displayResults();
});

scissors.addEventListener("click", () => {
  playerChoice = choices[2];
  playerIcon.innerHTML = `
      <img src=${icons[2]} class="icons">
      `;
  cpuMove();
  displayResults();
});

// 2) capture the cpu's choice
const cpuMove = () => {
  let number = randomNumber();
  cpuChoice = choices[number];
  cpuIcon.innerHTML = `
        <img src=${icons[number]} class="icons">
        `;
};

// 3) compare choices to determine the winner, or if the game is tied

const possibleOutcomes = () => {
  // PLAYER CHOSES ROCK [0]
  if (playerChoice === choices[0] && cpuChoice === choices[2]) {
    playerScore++;
    playerScoreboard.textContent = playerScore;
    winner.textContent = "You WIN!";
  } else if (playerChoice === choices[0] && cpuChoice === choices[1]) {
    cpuScore++;
    cpuScoreboard.textContent = cpuScore;
    winner.textContent = "You LOSE!";
  } else if (playerChoice === choices[0] && cpuChoice === choices[0]) {
    winner.textContent = "IT'S A TIE!";
  }

  // PLAYER CHOSES PAPER [1]
  if (playerChoice === choices[1] && cpuChoice === choices[0]) {
    playerScore++;
    playerScoreboard.textContent = playerScore;
    winner.textContent = "You WIN!";
  } else if (playerChoice === choices[1] && cpuChoice === choices[2]) {
    cpuScore++;
    cpuScoreboard.textContent = cpuScore;
    winner.textContent = "You LOSE!";
  } else if (playerChoice === choices[1] && cpuChoice === choices[1]) {
    winner.textContent = "IT'S A TIE!";
  }

  // PLAYER CHOSES SCISSORS [2]

  if (playerChoice === choices[2] && cpuChoice === choices[1]) {
    playerScore++;
    playerScoreboard.textContent = playerScore;
    winner.textContent = "You WIN!";
  } else if (playerChoice === choices[2] && cpuChoice === choices[0]) {
    cpuScore++;
    cpuScoreboard.textContent = cpuScore;
    winner.textContent = "You LOSE!";
  } else if (playerChoice === choices[2] && cpuChoice === choices[2]) {
    winner.textContent = "IT'S A TIE!";
  }
};

// display the results
const displayResults = () => {
  gameScrn.classList.add("hidden");
  resultScrn.classList.remove("hidden");
  headerText.innerHTML = `Results!`;
  possibleOutcomes();
};

/*================
  REPLAY THE GAME
=================*/

const replayGame = () => {
  resultScrn.classList.add("hidden");
  gameScrn.classList.remove("hidden");

  roundCounter++;
  round.innerHTML = roundCounter;


  headerText.innerHTML = `Make your Choice`;
  playerScoreboard.textContent = playerScore;
  cpuScoreboard.textContent = cpuScore;
};

playAgain.addEventListener("click", replayGame);
