function computerPlay() {
  const plays = ["rock", "paper", "scissors"];
  return plays[Math.floor(Math.random() * plays.length)];
}

function playRound(playerSelection, computerSelection) {
  // let win = "you win";
  // let lose = "you lose";
  // let tie = "it is a tie";

  if (computerSelection === playerSelection) {
    return tie;
  } else if (
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "scissors" && playerSelection === "rock") ||
    (computerSelection === "paper" && playerSelection === "scissors")
  ) {
    return win;
  } else if (
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    return lose;
  } else {
    alert("pick one item, please");
  }
}

const win = "you win";
const lose = "you lose";
const tie = "it is a tie";

const playerSelection = prompt(
  "pick a move. rock, paper or scissors:"
).toLowerCase();
const computerSelection = computerPlay();
// console.log("you picked " + playerSelection);
// console.log("computer picked " + computerSelection);

function game() {
  playRound(playerSelection, computerSelection);
  let computerScore = parseInt(0);
  let playerScore = parseInt(0);

  //  LOOP
  for (let i = 0; i < 2; i++) {
    let playerSelection = prompt(
      "pick a move. rock, paper or scissors:"
    ).toLowerCase();

   

    console.log("you picked " + playerSelection);
    console.log("computer picked " + computerSelection);
  }
  console.log(playerScore, computerScore);
}
console.log(playRound(playerSelection, computerSelection));
game();
