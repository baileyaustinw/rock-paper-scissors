let humanScore = 0;
let computerScore = 0;
let computerChoice;
let userNum;

function getHumanChoice() {
    return prompt("Let's play rock, paper, scissors! Make your choice: ").toLowerCase();
}

function getComputerChoice() {
    let randomInteger = Math.floor(Math.random() * 3 + 1);
    if (randomInteger == 1) {
        return "rock";
    } else if (randomInteger == 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(userNum, computerChoice) {
    if (userNum == computerChoice) {
        console.log("It's a tie!");
    } else if (userNum == 'rock' && computerChoice == 'scissors') {
        console.log("You chose Rock and the computer chose Scissors. Rock beats Scissors!");
        humanScore++;
    } else if (userNum == 'rock' && computerChoice == 'paper') {
        console.log("You picked Rock and the computer picked Paper. Paper beats Scissors!");
        computerScore++;
    } else if (userNum == 'scissors' && computerChoice == 'rock') {
        console.log("You picked Scissors and the computer picked Rock. Rock beats Scissors!");
        computerScore++;
    } else if (userNum == 'scissors' && computerChoice == 'paper') {
        console.log("You picked Scissors and the computer picked Paper. Scissors beats Paper!");
        humanScore++;
    } else if (userNum == 'paper' && computerChoice == 'rock') {
        console.log("You picked Paper and the computer picked Rock. Paper beats Rock!");
        humanScore++;
    } else if (userNum == 'paper' && computerChoice == 'scissors') {
        console.log("You picked Paper and the computer picked Scissors. Scissors beats Paper!");
        computerScore++;
    } else {
        console.log("Something broke. Oops!");
    }

    console.log("Scorecard");
    console.log("Human: " + humanScore + ", Computer: " + computerScore);
}

const roundButton = document.getElementById("roundButton");
roundButton.onclick = function() {
    userNum = getHumanChoice();
    computerChoice = getComputerChoice()
    playRound(userNum, computerChoice);
}

function playGame() {
    for (i = 0; i < 5; i++) {
        console.log("Round " + (i + 1).toString());
        userNum = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(userNum, computerChoice);
    }
}

playGame();