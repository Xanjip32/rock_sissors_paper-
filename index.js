const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
};

const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

let humanChoice;
let computerScore = 0;
let humanScore = 0;
let round = 0;

const playGame = () => {
  // Stop the game if someone already won
  if (round >=5) {
    return;
  }

  const computerChoice = getComputerChoice();
  round++;

  if (humanChoice === computerChoice) {
    resultDiv.textContent = `Round ${round}: It's a tie!`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultDiv.textContent = `Round ${round}: You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultDiv.textContent = `Round ${round}: You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  // Update score every round
  scoreDiv.textContent = `Score - You: ${humanScore} Computer: ${computerScore}`;

  // Announce winner once someone reaches 5
  if (humanScore === 5) {
    resultDiv.textContent = "🎉 You win the game!";
  } else if (computerScore === 5) {
    resultDiv.textContent = "💻 Computer wins the game!";
  }
};

// Button event listeners
document.getElementById("btn1").addEventListener("click", () => {
  humanChoice = "rock";
  playGame();
});

document.getElementById("btn2").addEventListener("click", () => {
  humanChoice = "paper";
  playGame();
});

document.getElementById("btn3").addEventListener("click", () => {
  humanChoice = "scissors";
  playGame();
});
