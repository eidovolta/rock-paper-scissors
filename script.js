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

const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");
const scoreBoard = document.getElementById("score-board");

let playerScore = 0;
let computerScore = 0;

/**
 * Generates a number between 1 and 3 (included) and returns enum string with an RPS choice (rock, paper or scissors)
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
 * Adjusts score based on the result string
 * 
 * @param {string} result 
 */
function evaluateResult (result) {
    if (result) {
        if (result === RESULT.WIN) {
            playerScore++;
        } 
        else if (result === RESULT.LOSS) {
            computerScore++;
        }
    }
    else {
        console.log("Error - result is null");
    }
}

/**
 * Checks if any of the players reached the desired score
 * 
 * @returns true if the game has ended or false if the game is still ongoing
 */
function isGameEnd() {
    if (playerScore === 5 || computerScore === 5) {
        return true;
    }
    else {
        return false;
    }
}

/**
 * Plays one round of Rock Paper Scissors
 * Get player input based on the button pressed
 * 
 */
function game () {
    let playerChoice = this.id;
    let computerChoice;
    let result;
    computerChoice = getComputerChoice();
    result = rockPaperScissors(playerChoice, computerChoice);
    evaluateResult(result);
    if (isGameEnd()) {
        scoreBoard.textContent = `The game has officially ended!\n\nFinal scores are:\n\nPLAYER: ${playerScore} - CPU: ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }
    else {
        scoreBoard.textContent = `${result}\n\nYour choice: ${playerChoice}\n\nComputer choice: ${computerChoice}\n\nPLAYER:${playerScore} - CPU:${computerScore}`;
    }
}

buttonRock.addEventListener('click', game);
buttonPaper.addEventListener('click', game);
buttonScissors.addEventListener('click', game);