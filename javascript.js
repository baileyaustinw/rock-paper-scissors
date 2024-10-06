let humanScore = 0;
let computerScore = 0;
let userNum;

function getHumanChoice() {
    userNum = prompt("Pick a number - 1 for Rock, 2 for Scissors, 3 for Paper: ");
}

getHumanChoice();
let computerChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
console.log(computerChoice);
console.log(userNum);

if (userNum == computerChoice) {
    console.log("It's a tie!");
} else if (userNum == 1 && computerChoice == 2) {
    console.log("You chose Rock and the computer chose Scissors. Rock beats Scissors!");
    humanScore++;
} else if (userNum == 1 && computerChoice == 3) {
    console.log("You picked Rock and the computer picked Paper. Paper beats Scissors!");
    computerScore++;
} else if (userNum == 2 && computerChoice == 1) {
    console.log("You picked Scissors and the computer picked Rock. Rock beats Scissors!");
    computerScore++;
} else if (userNum == 2 && computerChoice == 3) {
    console.log("You picked Scissors and the computer picked Paper. Scissors beats Paper!");
    humanScore++;
} else if (userNum == 3 && computerChoice == 1) {
    console.log("You picked Paper and the computer picked Rock. Paper beats Rock!");
    humanScore++;
} else if (userNum == 3 && computerChoice == 2) {
    console.log("You picked Paper and the computer picked Scissors. Scissors beats Paper!");
    computerScore++;
} else {
    console.log("Something broke. Oops!");
}