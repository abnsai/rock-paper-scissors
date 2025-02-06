console.log("Hello World");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getHumanChoice() {
    let humanChoice;
    while (true) {
        humanChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            break; // Valid input, exit the loop
        } else {
            alert("Invalid input. Please enter rock, paper, or scissors.");
        }
    }
    return humanChoice;
}


function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      return "You win! " + humanChoice + " beats " + computerChoice;
    } else {
      computerScore++;
      return "You lose! " + computerChoice + " beats " + humanChoice;
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    console.log(result);
  }

  console.log("Final Scores:");
  console.log("Human: " + humanScore);
  console.log("Computer: " + computerScore);

  if (humanScore > computerScore) {
    console.log("You are the overall winner!");
  } else if (computerScore > humanScore) {
    console.log("The computer is the overall winner!");
  } else {
    console.log("It's a tie game overall!");
  }
}

playGame();