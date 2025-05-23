'use strict';

// Global variables

let pScore = 0;
let cScore = 0;

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

    if (choices.indexOf(pInput) < 0)
        console.log("Trash!!");

    console.log(pInput);
}

function gameStart(cRound = 0, totalRounds = 2) {
    while (cRound < totalRounds) {
        getHumanChoice();
        cRound++;
    }

}

gameStart();
// console.log(getComputerChoice());