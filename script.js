'use strict';

const returnOptions = () => ["Rock", "Paper", "Scissors"].map((e) => e.toLowerCase());

const getComputerChoice = () => {
    const choices = returnOptions();
    const rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
}

const checkMove = (player, move, oPlayer, oMove) => {
    return player === move && oPlayer === oMove;
}

function gameStart() {
    const rBtn = document.querySelector('#rock');
    const pBtn = document.querySelector('#paper');
    const sBtn = document.querySelector('#scissors');

    const cScore = document.querySelector('.computer-score');
    const pScore = document.querySelector('.player-score');
    const results = document.querySelector('.display-winner');

    let [ playerScore, compScore ] = [0, 0];
    let wRounds = 5;

    function playRound(player, computer) {
        if (playerScore < wRounds && compScore < wRounds) {
            if (player === computer) results.textContent = `Tie!!`;
            else if (
                checkMove(player, "rock", computer, "scissors") ||
                checkMove(player, "paper", computer, "rock") ||
                checkMove(player, "scissors", computer, "paper")) {
                playerScore++;
                results.textContent = `You win: ${player} beats ${computer}`;
            } else {
                compScore++;
                results.textContent = `You lose: ${computer} beats ${player}`;
            }
            pScore.textContent = `Player: ${playerScore}`;
            cScore.textContent = `Computer: ${compScore}`;
            highlightComputerChoice(computer);
        }
        if (playerScore === wRounds || compScore === wRounds) {
            let playerWin = playerScore > compScore && playerScore === wRounds;
            let compWin = compScore > playerScore && compScore === wRounds;
            results.textContent = `${playerWin ? 'You Win!!' : compWin ? 'You Lose!!' : ''}`;
            if (compWin) {
                const img = document.createElement('img');
                const parent = document.querySelector('.get-rekt');

                img.src = `./assets/icons8-obscene-gesture-50.png`;
                img.alt = `Get rekt loser`;
                img.setAttribute('style', 'width: 150px; height: 150px;');
                parent.appendChild(img);
            }
            setTimeout(() => {
                endGame(player, document.querySelector('img'));
            }, 4000);
        }
    }

    function endGame(player, node) {
        if (playerScore === wRounds || compScore === wRounds) {
            playerScore = 0;
            compScore = 0;
            if (node !== null) {
                document.querySelector('.get-rekt').removeChild(node);
            }
        }
    }

    rBtn.addEventListener('click', () => {
        playRound("rock", getComputerChoice());
    });
    pBtn.addEventListener('click', (event) => {
        playRound("paper", getComputerChoice());
    });
    sBtn.addEventListener('click', (event) => {
        playRound("scissors", getComputerChoice());
    });
}

function highlightComputerChoice(comp) {
    const cChoice = document.querySelector(`#${comp}`);
    cChoice.classList.add('c-highlight');
    setTimeout(() => {
        cChoice.classList.remove('c-highlight');
    }, 900);
}

gameStart();