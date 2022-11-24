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

    return cpuHand;
}

// function to play round
function playRound() {

    // prompt for playerHand
    let playerHand = prompt("What will you play?");
    if (playerHand === null)
        playerHand = prompt("Please enter rock, paper, or scissors");
    else
        playerHand = playerHand.toLowerCase();

    // get cpuHand
    let cpuHand = getComputerChoice(1, 3);

    // conditions for winning hand
    if (playerHand === "rock" && cpuHand === "rock")
        console.log("Tie!");
    else if (playerHand === "rock" && cpuHand === "paper") {
        console.log("Paper beats Rock! You lose!");
        return cpuScore++;
    } 
    else if (playerHand === "rock" && cpuHand === "scissors") {
        console.log("Rock beats Scissors! You win!");
        return playerScore++ ;
    }
    else if (playerHand === "paper" && cpuHand === "rock") {
        console.log("Paper beats Rock! You win!");
        return playerScore++;
    }
    else if (playerHand === "paper" && cpuHand === "paper")
        console.log("Tie!");
    else if (playerHand === "paper" && cpuHand === "scissors") {
        console.log("Scissors beats Paper! You lose!");
        return cpuScore++;
    }
    else if (playerHand === "scissors" && cpuHand === "rock") {
        console.log("Rock beats Scissors! You lose!");
        return cpuScore++;
    }
    else if (playerHand === "scissors" && cpuHand === "paper") {
        console.log("Scissors beats Paper! You win!");
        return playerScore++;
    }
    else if (playerHand === "scissors" && cpuHand === "scissors")
        console.log("Tie!");
    else
        return playerScore, cpuScore;
}

// game function
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log("Player: " + playerScore + "\t" + "CPU: " + cpuScore);
    }

    if (playerScore > cpuScore)
        console.log("You win the game!");
    else if (playerScore < cpuScore)
        console.log("You lost the game :(");
    else
        console.log("It's a tie!");
}

game();