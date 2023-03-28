function getUserChoice (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Please choose either rock, paper, or scissors');
    }
};
function getComputerChoice () {
    var computerInput = Math.floor(Math.random()*3);

    if (computerInput === 0) {
        computerInput = 'rock';

    }else if (computerInput === 1) {
        computerInput = 'scissors';

    }else if (computerInput === 2) {
        computerInput = 'paper';
    }
    return computerInput;
};
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'You tied. Try again.';
    }
    else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Paper covers rock. You lose.';
        }else {
            return 'Rock crushes scissors! Congrats.';
        }
    }
    else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Scissors cuts paper. You lose.';
        }else {
            return 'Paper covers rock! Congrats.';
        }
    }
    else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Rock crushes scissors. You lose.';
        }else {
            return 'Scissors cuts paper! Congrats.';
        }
    
    }
    else if (userChoice === 'bomb') {
        return 'BOOM!! You win!';
    }
};
function playGame(){
    var userChoice = getUserChoice('rock');
    console.log(userChoice);

    var computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
};
playGame();
