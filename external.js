function computerPlay() {
  const plays = ["rock", "paper", "scissors"];
  return plays[Math.floor(Math.random() * plays.length)];
}

function playRound(playerSelection, computerSelection) {
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

function game() {
  let computerScore = parseInt(0);
  let playerScore = parseInt(0);

  //  LOOP
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "pick a move. rock, paper or scissors:"
    ).toLowerCase();
    const computerSelection = computerPlay();

    if (playRound(playerSelection, computerSelection) === tie) {
      i--;
      console.log(tie);
    } else if (playRound(playerSelection, computerSelection) === win) {
      playerScore++;
      console.log(win);
    } else if (playRound(playerSelection, computerSelection) === lose) {
      computerScore++;
      console.log(lose);
    } else {
      alert("pick an item");
    }

    console.log("computer picked " + computerSelection);
  }
  console.log("you got " + playerScore, "computer got " + computerScore);
  if (playerScore >= 3) {
    console.log("you won this round");
  } else {
    console.log("you lose. play another around");
  }
}
game();
