let cpuHand;
let playerScore = 0;
let cpuScore = 0;

// function getComputerChoice
function getComputerChoice(min, max) {
    // randomly generate number from 1 to 3 and assign to variable
    const n = Math.floor(Math.random() * (max - min + 1) + min);
    
    // assign cpuHand based on n
    if (n === 1)
        cpuHand = "rock";
    else if (n === 2)
        cpuHand = "paper";
    else if (n === 3)
        cpuHand = "scissors";
}

// prompt for playerHand
let playerHand = prompt("What will you play?");
if (playerHand === null)
    playerHand = prompt("Please enter rock, paper, or scissors");
else
    playerHand = playerHand.toLowerCase();

// function to play round
function playRound(playerHand, cpuHand) {

    // conditions for winning hand
    if (playerHand === "rock" && cpuHand === "rock")
        return "Tie!";
    else if (playerHand === "rock" && cpuHand === "paper") {
        cpuScore++;
        return "Paper beats Rock! You lose!";
    } 
    else if (playerHand === "rock" && cpuHand === "scissors") {
        playerScore++;
        return "Rock beats Scissors! You win!";
    }
    else if (playerHand === "paper" && cpuHand === "rock") {
        playerScore++;
        return "Paper beats Rock! You win!";
    }
    else if (playerHand === "paper" && cpuHand === "paper")
        return "Tie!";
    else if (playerHand === "paper" && cpuHand === "scissors") {
        cpuScore++;
        return "Scissors beats Paper! You lose!";
    }
    else if (playerHand === "scissors" && cpuHand === "rock") {
        cpuScore++;
        return "Rock beats Scissors! You lose!";
    }
    else if (playerHand === "scissors" && cpuHand === "paper") {
        playerScore++;
        return "Scissors beats Paper! You win!";
    }
    else if (playerHand === "scissors" && cpuHand === "scissors")
        return "Tie!";

    else
        return "Input not valid";
}

// game function
function game() {
    for (let i = 0; i < 5; i++) {

    }
}
getComputerChoice(1, 3);
console.log(playRound(playerHand, cpuHand));