function computerPlay() {
  const plays = ["rock", "paper", "scissors"];
  return plays[Math.floor(Math.random() * plays.length)];
}

// scores
const win = "you win.";
const lose = "you lose.";
const tie = "it's a tie";

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const playerSelection = e.target.id;
    game(playerSelection);
  });
});

// playround function
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

// game function
function game(playerSelection) {
  let computerScore = parseInt(0);
  let playerScore = parseInt(0);

  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    console.log(
      "you picked " + playerSelection,
      "&",
      "computer picked " + computerSelection
    );

    if (playRound(playerSelection, computerSelection) === tie) {
      i--;
      console.log(tie);
    } else if (playRound(playerSelection, computerSelection) === win) {
      playerScore++;
      console.log(win, "you have", `${playerScore}`, "pts");
    } else if (playRound(playerSelection, computerSelection) === lose) {
      computerScore++;
      console.log(lose, "computer has", `${computerScore}`, "pts");
    } else {
      alert("pick an item");
    }
  }
  console.log("you got " + playerScore, "& computer got " + computerScore);
  if (playerScore >= 3) {
    console.log("you won this round");
  } else {
    console.log("you lose. play another around");
  }
}
