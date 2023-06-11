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

  let displayFinalResult = `you picked ${playerSelection} and computer picked ${computerSelection}`;
  playersChoices();
  const result = playRound(playerSelection, computerSelection);

  if (result === tie) {
    UpdateWinner(tie);
    setTimeout(() => {
      UpdateWinner("");
    }, 3000);
  } else if (result === win) {
    playerScore++;
  } else {
    computerScore++;
  }

  // for fixing trouble
  // console.log("you got " + playerScore, "& computer got " + computerScore);

  updateScore();
  if (playerScore + computerScore === 5) {
    if (playerScore > computerScore) {
      UpdateWinner(`you got ${playerScore} so you won the game!`);
    } else if (playerScore < computerScore) {
      UpdateWinner(`computer got ${computerScore} so you lost`);
    } else {
      UpdateWinner(
        `you got ${playerScore} and computer got ${computerScore} so it's a tie!`
      );
    }
    reset();
  }

  // display what the computer and player chooses

  // the displayFinalResult disappears too quickly set timeout on it?
  function playersChoices() {
    let choices = document.querySelector("#choices");
    choices.textContent = displayFinalResult;
  }

  function updateScore() {
    let displayResults = document.querySelector("#displayResults");
    displayResults.textContent =
      "player: " + playerScore + " computer: " + computerScore;
  }

  function UpdateWinner(result) {
    let displayWinner = document.querySelector("#displayWinner");
    displayWinner.textContent = result;
  }

  function reset() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
  }
}
