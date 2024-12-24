let humanScore = 0;
let computerScore = 0;
let computerChoice;
let userNum;

const gameContainer = document.querySelector('#game');
const gameMessage = document.querySelector('#message');
const gameScore = document.querySelector('#score');

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
        gameMessage.textContent = 'It\'s a tie!';
    } else if (userNum == 'rock' && computerChoice == 'scissors') {
        gameMessage.textContent = "You chose Rock and the computer chose Scissors. Rock beats Scissors!";
        humanScore++;
    } else if (userNum == 'rock' && computerChoice == 'paper') {
        gameMessage.textContent = "You picked Rock and the computer picked Paper. Paper beats Scissors!";
        computerScore++;
    } else if (userNum == 'scissors' && computerChoice == 'rock') {
        gameMessage.textContent = "You picked Scissors and the computer picked Rock. Rock beats Scissors!";
        computerScore++;
    } else if (userNum == 'scissors' && computerChoice == 'paper') {
       gameMessage.textContent = "You picked Scissors and the computer picked Paper. Scissors beats Paper!";
        humanScore++;
    } else if (userNum == 'paper' && computerChoice == 'rock') {
        gameMessage.textContent = "You picked Paper and the computer picked Rock. Paper beats Rock!";
        humanScore++;
    } else if (userNum == 'paper' && computerChoice == 'scissors') {
        gameMessage.textContent = "You picked Paper and the computer picked Scissors. Scissors beats Paper!";
        computerScore++;
    } else {
        gameMessage.textContent = "Something broke. Oops!";
    }

    if (humanScore == 5 || computerScore == 5) {
        if (humanScore == 5) {
            score.textContent = "Game over! The Human wins!";
        } else if (computerScore == 5) {
            score.textContent = "Game over! The Computer wins!";
        }

        humanScore = 0;
        computerScore = 0;
    } else {
        score.textContent = 'Human: ' + humanScore + ', Computer: ' + computerScore; 
    }
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

//playGame();

gameContainer.addEventListener('click', (e) => {
    let target = e.target;

    //console.log(target.id);
    switch(target.id) {
        case 'rock':
            playRound('rock', getComputerChoice());
            break;
        case 'paper':
            playRound('paper', getComputerChoice());
            break;
        case 'scissors':
            playRound('scissors', getComputerChoice());
            break;
    }
});