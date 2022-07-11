function computerPlay() {
  const plays = ["rock", "paper", "scissors"];
  return plays[Math.floor(Math.random() * plays.length)];
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    return "its a tie";
  } else if (
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "scissors" && playerSelection === "rock") ||
    (computerSelection === "paper" && playerSelection === "scissors")
  ) {
    return "you win";
  } else if (
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    return "you lose";
  } else {
    alert("pick one item, please");
  }
}

// const playerSelection = prompt("rock, paper or scissors: ").toLowerCase();
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));
const computerSelection = computerPlay();


//  play five rounds 
// function game() {
//   const playerSelection = prompt("rock, paper or scissors: ").toLowerCase();
//   console.log(computerSelection);

//   playRound(playerSelection, computerSelection);
//   for (let i = 0; i < 5; i++) {
//     if (computerSelection === playerSelection) {
//       console.log("tie");
//       break;
//     }
//   }
// }

// game();
