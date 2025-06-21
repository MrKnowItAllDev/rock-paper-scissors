'use strict';

// I'm not sure why I created a function to declare these variables
// The variables would've just been initialised in the main game function
const getScore = () => {
    let playerScore = 0;
    let compScore = 0;
    return { playerScore, compScore };
}

const returnOptions = () => {
    // The .map() function iterates through array and makes each element lowercase
    return ["Rock", "Paper", "Scissors"].map((e) => e.toLowerCase());
}

const getComputerChoice = () => {
    const choices = returnOptions();
    const rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
}

const getHumanChoice = () => {
    const pInput = prompt("Rock, Paper or Scissors?").toLowerCase();
    const choices = returnOptions();

    if (choices.indexOf(pInput) < 0 || !pInput)
        console.log("Trash!!");
    return pInput;
}

const checkMove = (player, move) => {
    return player === move;
}

const gameStart = () => {
    // Retrieve the score variables from the getScore function
    let { playerScore, compScore } = { ...getScore() };
    let wRounds = 5;

    function playRound(player, comp) {
        if (checkMove(player, "rock") && checkMove(comp, "scissors") ||
            checkMove(player, "paper") && checkMove(comp, "rock") ||
            checkMove(player, "scissors") && checkMove(comp, "paper")) {
                playerScore++;
                console.log(`You win, ${player} beats ${comp}!!`);
        } 
        
        else if (checkMove(comp, "rock") && checkMove(player, "scissors") || 
                checkMove(comp, "paper") && checkMove(player, "rock") || 
                checkMove(comp, "scissors") && checkMove(player, "paper")) {
                compScore++;
                console.log(`You lose, ${comp} beats ${player}`);
        }
        else { 
            console.log(`Tie: ${player} ${comp}`); 
        }
    }

    while (playerScore < wRounds && compScore < wRounds) {
        let player = getHumanChoice();
        let comp = getComputerChoice();
        playRound(player, comp);
    }
    if (playerScore > compScore) console.log("You Win!!");
    else console.log("You Lose!!");
}

gameStart();