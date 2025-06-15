'use strict';

function returnOptions() {
    return ["Rock", "Paper", "Scissors"].map((e) => e.toLowerCase());
}

function getComputerChoice() {
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

function checkMove(player, move) {
    return player === move;
}

function gameStart() {
    // Retrieve the score variables from the getScore function
    let playerScore = 0;
    let compScore = 0;
    let wRounds = 5;

    function playRound(player, comp) {
        if (player === comp) console.log(`Tie: ${player} ${comp}`); 
        if (checkMove(player, "rock") && checkMove(comp, "scissors") ||
            checkMove(player, "paper") && checkMove(comp, "rock") ||
            checkMove(player, "scissors") && checkMove(comp, "paper")) {
                playerScore++;
                console.log(`You win, ${player} beats ${comp}!!`);
        } else {
                compScore++;
                console.log(`You lose, ${comp} beats ${player}`);
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
