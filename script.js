let cpuHand;

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
playerHand = playerHand.toLowerCase();

// function to play round
function playRound(playerHand, cpuHand) {

    // conditions for winning hand
    if (playerHand === "rock" && cpuHand === "rock")
        return "Tie!";
    else if (playerHand === "rock" && cpuHand === "paper")
        return "Paper beats Rock! You lose!";
    else if (playerHand === "rock" && cpuHand === "scissors")
        return "Rock beats Scissors! You win!";
    
    else if (playerHand === "paper" && cpuHand === "rock")
        return "Paper beats Rock! You win!";
    else if (playerHand === "paper" && cpuHand === "paper")
        return "Tie!";
    else if (playerHand === "paper" && cpuHand === "scissors")
        return "Scissors beats Paper! You lose!";

    else if (playerHand === "scissors" && cpuHand === "rock")
        return "Rock beats Scissors! You lose!";
    else if (playerHand === "scissors" && cpuHand === "paper")
        return "Scissors beats Paper! You lose!";
    else if (playerHand === "scissors" && cpuHand === "scissors")
        return "Tie!";

    else
        return "Input not valid";
}

getComputerChoice(1, 3);
console.log(playRound(playerHand, cpuHand));