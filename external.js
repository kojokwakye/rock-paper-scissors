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

  let displaySelection = `player: ${playerSelection} - computer: ${computerSelection}`;
  playersChoices();
  const result = playRound(playerSelection, computerSelection);

  if (result === tie) {
    UpdateWinner(tie);
    setTimeout(() => {
      UpdateWinner("");
    }, 2000);
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
      UpdateWinnerWithDelay(`you got ${playerScore}. you won `, 2500);
    } else if (playerScore < computerScore) {
      UpdateWinnerWithDelay(`computer: ${computerScore}. you lost`, 2500);
    } else {
      UpdateWinnerWithDelay();
      // it's a tie
    }
    setTimeout(() => {
      reset();
    }, 2500);
  }

  // display what the computer and player chooses
  function playersChoices() {
    let choices = document.querySelector("#choices");
    choices.textContent = displaySelection;
  }

  // update the score for each player
  function updateScore() {
    let playerPoint = document.querySelector("#playerPoint");
    playerPoint.textContent = playerScore;

    let computerPoint = document.querySelector("#computerPoint");
    computerPoint.textContent = computerScore;
  }

  // display and declare winner
  function UpdateWinner(result) {
    let displayWinner = document.querySelector("#displayWinner");
    displayWinner.textContent = result;
  }

  // results disappears too quickly after a round
  function UpdateWinnerWithDelay(result, delay) {
    UpdateWinner(result);
    setTimeout(() => {
      UpdateWinner("");
    }, delay);
  }
  // reset scores after a round of game
  function reset() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
  }
}
