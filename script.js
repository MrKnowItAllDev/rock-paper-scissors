'use strict';

const returnOptions = () => ["Rock", "Paper", "Scissors"].map((e) => e.toLowerCase());

const getComputerChoice = () => {
    const choices = returnOptions();
    const rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
}

const getHumanChoice = () => {
    const pInput = prompt("Rock, Paper or Scissors?").toLowerCase();
    const choices = returnOptions();
    if (choices.indexOf(pInput) < 0 || !pInput) console.log("Trash!!");
    return pInput;
}

const checkMove = (player, move, oPlayer, oMove) => player === move && oPlayer === oMove;

function gameStart() {
    let [ playerScore, compScore ] = [ 0, 0 ];
    let wRounds = 5;

    function playRound(player, comp) {
        if (player === comp) console.log(`Tie: ${player} : ${comp}`); 
        else if (checkMove(player, "rock", comp, "scissors") || checkMove(player, "paper", comp, "rock") || checkMove(player, "scissors", comp, "paper")) {
                playerScore++;
                console.log(`You win, ${player} beats ${comp}!!`);
        } else if (checkMove(comp, "rock", player, "scissors") || checkMove(comp, "paper", player, "rock") || checkMove(comp, "scissors", player, "paper")) {
                compScore++;
                console.log(`You lose, ${comp} beats ${player}`);
        } 
    }

    while (playerScore < wRounds && compScore < wRounds) {
        let [player , comp] = [getHumanChoice(), getComputerChoice()];
        playRound(player, comp);
    }
    if (playerScore > compScore) console.log("You Win!!");
    else console.log("You Lose!!");
}

gameStart();
