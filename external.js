const plays = ["rock", "paper", "scissors"];

function computerPlay() {
  return plays[Math.floor(Math.random() * plays.length)];
}
console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
  
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
