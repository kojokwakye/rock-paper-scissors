function computerPlay() {
  const plays = ["rock", "paper", "scissors"];
  return plays[Math.floor(Math.random() * plays.length)];
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    return "its a tie";
  } else if (computerSelection === "paper") {
    return "computer picked paper. you win";
  } else {
    return "computer picked scissors. you win!";
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
