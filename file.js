const userscore = 0;
const compscore = 0;
const userscore_span = document.getElementById("user_score");
const compscore_span = document.getElementById("user_score");
const score_board = document.querySelector(".score_board");
const outcome_div = document.querySelector(".outcome");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getComputerChoice() {
    const choices = ['rock', 'paper' , 'scissors'];
    const randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber]
}

function game(_userchoice) {
    const getComputerChoice = getComputerChoice();

}

function main() {
    rock_div.addEventListener('click', function() {
        game("rock");
}) 

    paper_div.addEventListener('click', function() {
        game("paper");
}) 

    scissors_div.addEventListener('click', function() {
        game("rock");
}) 
}

main();