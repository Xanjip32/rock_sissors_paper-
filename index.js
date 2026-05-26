const getComputerchoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
};

const getHumanChoice = () => {
  const choice = prompt(
    "Enter your choice (rock, paper, scissors):",
  ).toLowerCase();
  return choice;
};

const playGame = () => {
  humanScore = 0;
  computerScore = 0;
  round = 5;

  for (let round = 0; round < 5; round++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerchoice();

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
  }

    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
  if (humanScore > computerScore) {
    return "Overall Winner: You!";
  } else if (computerScore > humanScore) {
    return "Overall Winner: Computer!";
  } else {
    return "Overall Result: It's a tie!";
  }
};

console.log(playGame());
