function computerPlay() {
  const plays = ["rock", "paper", "scissors"];
  return plays[Math.floor(Math.random() * plays.length)];
}

// scores
const win = "you win.";
const lose = "you lose.";
const tie = "it's a tie";

let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
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
  } else {
    return lose;
  }
}

// game function
function game(playerSelection) {
  const computerSelection = computerPlay();
  console.log(
    "you picked " + playerSelection,
    "&",
    "computer picked " + computerSelection
  );
  const result = playRound(playerSelection, computerSelection);

  if (result === tie) {
    console.log(tie);
  } else if (result === win) {
    playerScore++;
  } else {
    computerScore++;
  }

  // record
  console.log("you got " + playerScore, "& computer got " + computerScore);

  updateScore();
  if (playerScore + computerScore === 5) {
    if (playerScore > computerScore) {
      console.log("You won the game!");
    } else if (playerScore < computerScore) {
      console.log("You lost the game!");
    } else {
      console.log("It's a tie!");
    }
    reset();
  }
  function updateScore() {
    let displayResults = document.querySelector("#displayResults");
    displayResults.textContent =
      "player: " + playerScore + " computer: " + computerScore;
  }

  function reset() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
  }
}

// function to input score into displayResults
