let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("ROCK");
const paper_div = document.getElementById("PAPER");
const scissors_div = document.getElementById("SCISSORS");
const choices = ['ROCK', 'PAPER', 'SCISSORS'];

const getComputerChoice = () => {return choices[Math.floor(Math.random() * choices.length)]}; // that's a good one 

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = userChoice + " beats " + compChoice + ". You win!";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 300)
}

function lose (userChoice, compChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = userChoice + "  loses to " + compChoice + ". You lose...";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 300)
}


function draw (userChoice, compChoice) {
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = "It's a draw. You both chose " + userChoice +".";
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 300)
}


function game(userChoice){
    let compChoice = getComputerChoice();

    if(userChoice === compChoice){
        draw(userChoice, compChoice);
    }else{
        if( ((choices.indexOf(userChoice)+1)%3) === choices.indexOf(compChoice) ){
            win(userChoice, compChoice);
        }else{
            lose(userChoice, compChoice);
        }
    }
}


function main (){
    rock_div.addEventListener("click", function() { 
        game('ROCK');
    })
    paper_div.addEventListener("click", function() { 
        game('PAPER');
    })
    scissors_div.addEventListener("click", function() { 
        game('SCISSORS');
    })
}


main();