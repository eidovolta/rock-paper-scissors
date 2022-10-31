const CHOICE = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors"
}

const RESULT = {
    WIN: "You win!",
    DRAW: "It's a draw!",
    LOSS: "You lose!"
}


/**
 * Generates a number between 1 and 3 (included) and returns enum string with an RPS choice
 * 
 * @returns {string}
 */
function getComputerChoice () {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    
    switch (randomChoice) {
        case 1: return CHOICE.ROCK;
        case 2: return CHOICE.PAPER;
        case 3: return CHOICE.SCISSORS;
    }
}

/**
 * Plays one round of RPS and returns a string with the result
 * 
 * @param {string} playerChoice
 * @param {string} computerChoice
 * 
 * @returns {string} 
 */
function rockPaperScissors (playerChoice, computerChoice) {
    const formattedPlayerChoice = playerChoice.toLowerCase();
    let result = null;

    if (formattedPlayerChoice === CHOICE.ROCK) {
        if (computerChoice === CHOICE.PAPER) {
            result = RESULT.LOSS;
        }
        else if (computerChoice === CHOICE.ROCK) {
            result = RESULT.DRAW;
        }
        else if (computerChoice === CHOICE.SCISSORS){
            result = RESULT.WIN;
        }
    }
    else if (formattedPlayerChoice === CHOICE.PAPER) {
        if (computerChoice === CHOICE.PAPER) {
            result = RESULT.DRAW;
        }
        else if (computerChoice === CHOICE.ROCK) {
            result = RESULT.WIN;
        }
        else if (computerChoice === CHOICE.SCISSORS){
            result = RESULT.LOSS;
        }
    }
    else if (formattedPlayerChoice === CHOICE.SCISSORS) {
        if (computerChoice === CHOICE.PAPER) {
            result = RESULT.WIN;
        }
        else if (computerChoice === CHOICE.ROCK) {
            result = RESULT.LOSS;
        }
        else if (computerChoice === CHOICE.SCISSORS){
            result = RESULT.DRAW;
        }
    }

    return result;
}

/**
 * Plays the specified number of RPS games in a row including asking the player for his choice
 * 
 * @param {number} rounds number of rounds to be played
 */
function game (rounds) {
    let playerChoice;
    let computerChoice;
    let result;
    for (let i = 0; i < rounds; i++) {
        playerChoice = prompt("Enter your choice: (rock, paper or scissors)");
        computerChoice = getComputerChoice();
        result = rockPaperScissors(playerChoice, computerChoice);
        if (result) {
            console.log(`${result} - Your choice: ${playerChoice} - Computer choice: ${computerChoice}`);
        }
        else {
            console.log("Your choice is invalid, try again.");
            i--;
        }
    }
}

game(5);