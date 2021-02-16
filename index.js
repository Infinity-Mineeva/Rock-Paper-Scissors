
// array of rock, paper, scissors
const choices = ["⛰","📃","✂"];

// Varables for Starting values
let round = 1;
let playerScore = 0;
let computerScore = 0;

// Elements from DOM
const score = document.querySelector('.score');
let roundCount = document.getElementById('round');
let player = document.getElementById('player-score');
let cpu = document.getElementById('computer-score');

// Display Hub
roundCount.textContent = `Round: ${round}`;
player.textContent = `Player: ${playerScore}`;
cpu.textContent = `CPU: ${computerScore}`;


// Capturing the User's Choice
let playerChoice;

// Elements from DOM
const rock = document.getElementById('radioRock');
const paper = document.getElementById('radioPaper');
const scissor = document.getElementById('radioScissors');
const radios = document.getElementsByName('radioChoices')


rock.addEventListener("click", e => {
    playerChoice = choices[0];

    // cycle through and disable all radio buttons 
    for(let i=0; i<radios.length; i++){
        radios[i].disabled=true;
    }

    showResults();
    revealButton();
    
})

paper.addEventListener("click", e => {
    playerChoice = choices[1];

    // cycle through and disable all radio buttons 
    for(let i=0; i < radios.length; i++){
        radios[i].disabled=true;
    }

    showResults();
    revealButton();
    
})

scissor.addEventListener("click", e => {
    playerChoice = choices[2];

    // cycle through and disable all radio buttons 
    for(let i=0; i<radios.length; i++){
        radios[i].disabled=true;
    }

    showResults();
    revealButton();
      
})



// Capturing the CPU's Choice

function cpuChoice() {
let opponentChoice;
let randomNumber = Math.floor(Math.random() * 3)

switch(randomNumber){
    case 0:
        opponentChoice = choices[0];
        break;
    case 1:
        opponentChoice = choices[1];
        break;
    case 2:
        opponentChoice = choices[2];
        break;

}
return opponentChoice;
}

let opponentChoice = cpuChoice();

// to display the results
let outcome = document.querySelector(".results");

// flag for Tie Games
let tieGame;

function showResults() {
    // Show the Results Div
    outcome.classList.remove("hidden");

    // Elements from DOM
    let player_choice = document.querySelector(".player-choice");
    let computer_choice = document.querySelector(".computer-choice");
    let winner = document.querySelector(".winner");

    // Displays what each player chose
    player_choice.innerHTML = `You chose: ${playerChoice}`
    computer_choice.innerHTML = `CPU chose: ${opponentChoice}`

    // Outcomes if player chooses Rock
    if(playerChoice === choices[0] && opponentChoice === choices[0]) {
        winner.textContent = "It's a TIE!";
        tieGame = true;
    } else if(playerChoice === choices[0] && opponentChoice === choices[1]) {
        winner.textContent = "You LOSE!";
        tieGame = false;
        computerScore++;
        cpu.textContent = `CPU: ${computerScore}`;

    } else if(playerChoice === choices[0] && opponentChoice === choices[2]) {
        winner.textContent = 'You WIN!';
        tieGame = false;
        playerScore++;
        player.textContent = `Player: ${playerScore}`;
    }

    // Outcomes if player chooses Paper
    if(playerChoice === choices[1] && opponentChoice === choices[1]) {
        winner.textContent = "It's a TIE!";
        tieGame = true;
    } else if(playerChoice === choices[1] && opponentChoice === choices[2]) {
        winner.textContent = "You LOSE!";
        tieGame = false;
        computerScore++;
        cpu.textContent = `CPU: ${computerScore}`;

    } else if(playerChoice === choices[1] && opponentChoice === choices[0]) {
        winner.textContent = 'You WIN!';
        tieGame = false;
        playerScore++;
        player.textContent = `Player: ${playerScore}`;
    }

    // Outcomes if player chooses Scissors
    if(playerChoice === choices[2] && opponentChoice === choices[2]) {
        winner.textContent = "It's a TIE!";
        tieGame = true;
    } else if(playerChoice === choices[2] && opponentChoice === choices[0]) {
        winner.textContent = "You LOSE!";
        tieGame = false;
        computerScore++;
        cpu.textContent = `CPU: ${computerScore}`;

    } else if(playerChoice === choices[2] && opponentChoice === choices[1]) {
        winner.textContent = 'You WIN!';
        tieGame = false;
        playerScore++;
        player.textContent = `Player: ${playerScore}`;
    }

} 


// Give player the chance to play the game again

let newRound = document.querySelector(".new-round");
let newGame = document.querySelector(".play-again");
let rematch = document.getElementById("rematch");
let reset = document.getElementById("again");

function revealButton(){

    // determine which button to display based on scores
    if(playerScore === 3 || computerScore === 3) {
        newGame.classList.remove("hidden");
    } else if(tieGame === true || playerScore >= 1 || computerScore >= 1){
        newRound.classList.remove("hidden");
    }
}


// add functionality to the Rematch button
rematch.addEventListener("click", e =>{
    round++
    roundCount.textContent = `Round: ${round}`;

    // cycle through and enable all radio buttons and uncheck player's previous choice
    for(let i = 0; i < radios.length; i++){
        radios[i].disabled = false;
        radios[i].checked = false;
    }
    playerChoice = ""
    opponentChoice = cpuChoice();

    outcome.classList.add("hidden");
    newRound.classList.add("hidden");
})


// add functionality to the Play Again button
newGame.addEventListener("click", e => {
    round = 1;
    playerScore = 0;
    computerScore = 0;
    
    roundCount.textContent = `Round: ${round}`;
    player.textContent = `Player: ${playerScore}`;
    cpu.textContent = `CPU: ${computerScore}`;

     // cycle through and enable all radio buttons and uncheck player's previous choice
     for(let i = 0; i < radios.length; i++){
        radios[i].disabled = false;
        radios[i].checked = false;
    }
    playerChoice = ""
    opponentChoice = cpuChoice();

    outcome.classList.add("hidden");
    newGame.classList.add("hidden");

})

