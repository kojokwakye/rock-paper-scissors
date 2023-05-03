let computerScore = parseInt(0);
let playerScore = parseInt(0);

function computerPlay() {
  const plays = ["rock", "paper", "scissors"];
  return plays[Math.floor(Math.random() * plays.length)];
}

const win = "you win";
const lose = "you lose";
const tie = "it's a tie";

const computerSelection = computerPlay();
// let playerSelection = button;

const button = document.querySelectorAll("button");
button.forEach((button) => {
  button.addEventListener("click", () => {
    let playerSelection = button.id;
    const computerSelection = computerPlay();
    console.log(playerSelection, computerSelection);
  });
});

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

// function game() {
//   if (playRound(playerSelection, computerSelection === tie)) {
//     i--;
//     console.log(tie);
//   } else if (playRound(playerSelection, computerSelection === win)) {
//     playerScore++;
//     console.log(win);
//   } else if (playRound(playerSelection, computerSelection === lose)) {
//     computerScore++;
//     console.log(lose);
//   } else {
//     alert("pick an item");
//   }
//   console.log(
//     "you picked " + playerSelection,
//     "but",
//     "computer picked " + computerSelection
//   );
// }
// console.log("you got " + playerScore, "& computer got " + computerScore);
// if (playerScore >= 3) {
//   console.log("you won this round");
// } else {
//   console.log("you lose. play another around");
// }
// game(playerSelection, computerSelection);
