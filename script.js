// script.js
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();

  let resultMessage;

  if (playerSelection === computerSelection) {
    resultMessage = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    humanScore++;
    resultMessage = "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    resultMessage = "You lose! " + computerSelection + " beats " + playerSelection;
  }

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `<p>${resultMessage}</p><p>Human: ${humanScore} Computer: ${computerScore}</p>`;

  if (humanScore >= 5) {
    resultsDiv.innerHTML += "<p>You are the overall winner!</p>";
    disableButtons();
  } else if (computerScore >= 5) {
    resultsDiv.innerHTML += "<p>The computer is the overall winner!</p>";
    disableButtons();
  }

  console.log(resultMessage); // Keep for debugging if needed
}

function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));