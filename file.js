let userscore = 0;
let compscore = 0;
const userscore_span = document.getElementById("user_score");
const compscore_span = document.getElementById("comp_score");
const score_board = document.querySelector(".score_board");
const outcome_div = document.querySelector(".outcome > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const choices_Array = {'r':'Rock','p':'Paper','s':'Scissors'};

function getComputerChoice() {
    const choices = ['r', 'p' , 's'];
    const randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber]
}

function win(userChoice, ComputerChoice) {
    userscore++;    
    userscore_span.innerHTML = userscore
    compscore_span.innerHTML =compscore;
    outcome_div.innerHTML = choices_Array[userChoice] + " beats " + choices_Array[ComputerChoice]+'. You Win.'  
}

function lose(userChoice, ComputerChoice) {
    compscore++;
    userscore_span.innerHTML = userscore
    compscore_span.innerHTML =compscore;
    outcome_div.innerHTML = choices_Array[ComputerChoice] + " beats " + choices_Array[userChoice]+'. You Lose.'   
}

function draw(userChoice, ComputerChoice) {
    userscore_span.innerHTML = userscore
    compscore_span.innerHTML =compscore;
    outcome_div.innerHTML = 'Draw'
}

function game(userChoice) {
    const ComputerChoice = getComputerChoice();
    switch (userChoice + ComputerChoice) {
        case "pr":
        case "rs":
        case "sp":
            console.log("win")
            win(userChoice, ComputerChoice)
            break;
        case "rp":
        case "sr":
        case "ps":
            console.log("lose")
            lose(userChoice, ComputerChoice)
            break;
        case "rr":
        case "ss":
        case "pp":
            console.log("draw")
            draw(userChoice, ComputerChoice)
        
    }
        



}


    rock_div.addEventListener('click', function() {
        game("r");
    }) 

    paper_div.addEventListener('click', function() {
        game("p");
    }) 

    scissors_div.addEventListener('click', function() {
        game("s");
    }) 

