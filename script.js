let cpuHand;

// function getComputerChoice
function getComputerChoice(min, max) {
    // randomly generate number from 1 to 3 and assign to variable
    const n = Math.floor(Math.random() * (max - min + 1) + min);
    
    if (n === 1)
        cpuHand = "Rock";
    else if (n === 2)
        cpuHand = "Paper";
    else if (n === 3)
        cpuHand = "Scissors";
}
        // if number = 1
            // return rock
        // if number = 2
            // return paper
        // if number = 3
            // return scissors
getComputerChoice(1, 3);