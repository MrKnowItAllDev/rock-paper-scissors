'use strict';

function getScore() {
    let playerScore = 0;
    let compScore = 0;
    return { playerScore, compScore };
}

function returnOptions() {
    return ["Rock", "Paper", "Scissors"];
}

function getComputerChoice() {
    const choices = returnOptions();
    const rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
}

const getHumanChoice = () => {
    const pInput = prompt("Rock, Paper or Scissors?");
    const choices = returnOptions();

    if (choices.indexOf(pInput) < 0 || !pInput)
        console.log("Trash!!");
    return pInput;
}

function checkMove(player, move, oPlayer, Omove) {
    return player === move && oPlayer === Omove;
}

function playRound(player, comp) {
    player = player.toLowerCase();
    comp = comp.toLowerCase();
    let winner;

    if (checkMove(player, "rock", comp, "scissors") ||
        checkMove(player, "paper", comp, "rock") ||
        checkMove(player, "scissors", comp, "paper")) {
        winner = "Player";
    }

    else if (checkMove(comp, "rock", player, "scissors") || 
        checkMove(comp, "paper", player, "rock") ||
        checkMove(comp, "scissors", player, "paper")) {
        winner = "Computer";
    }
    return winner;
}

function gameStart() {
    let { playerScore, compScore } = { ...getScore() };
    const wRounds = 5;
    
    while (playerScore < wRounds && compScore < wRounds) {
        let player = getHumanChoice();
        let comp = getComputerChoice();
        
        playRound(player, comp);

        if (playRound(player, comp) == "Player") ++playerScore;
        else if (playRound(player, comp) == "Computer") ++compScore;
        else console.log(player, comp);

        console.log(`Player: ${playerScore}, Computer: ${compScore}`);
    }
}

gameStart();
