function computerPlay() {
  const plays = ["rock", "paper", "scissors"];
  return plays[Math.floor(Math.random() * plays.length)];
}

// scores
const win = "you win";
const lose = "you lose";
const tie = "it's a tie";

const button = document.querySelectorAll("button");
button.forEach((button) => {
  button.addEventListener("click", (e) => {
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    game(playerSelection);
    console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);
    console.log(result);
  });
});

// playround function
function playRound(playerSelection, computerSelection) {
  if (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    // Display an error message to the user
    console.log("invalid input");
    return;
  }

  if (computerSelection === playerSelection) {
    return "tie";
  } else if (
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "scissors" && playerSelection === "rock") ||
    (computerSelection === "paper" && playerSelection === "scissors")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

// game function
function game(playerSelection) {
  let computerScore = 0;
  let playerScore = 0;

  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    console.log(
      `You picked ${playerSelection}, and the computer picked ${computerSelection}.`
    );

    if (result === "tie") {
      console.log("It's a tie!");
      i--;
    } else if (result === "win") {
      console.log("You win!");
      playerScore++;
    } else if (result === "lose") {
      console.log("You lose!");
      computerScore++;
    }

    console.log(
      `You have ${playerScore} points, and the computer has ${computerScore} points.`
    );

    if (playerScore >= 3) {
      console.log("You won this round!");
      return;
    } else if (computerScore >= 3) {
      console.log("You lost. Play again!");
      return;
    }
  }

  console.log("Game over!");
}
