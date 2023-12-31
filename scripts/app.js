const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
]

const playerConfigOverlay = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const divErrorElement = document.getElementById('error-input');
const errorOutputElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const gameFieldElements = document.querySelectorAll('#game-board li');
const activePlayerNameElement = document.getElementById('active-player-name');


const editPlayer1Element = document.getElementById('edit-player1-btn');
const editPlayer2Element = document.getElementById('edit-player2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const startNewGameBtnElement = document.getElementById('start-game-btn');


editPlayer1Element.addEventListener('click', openPlayerConfig);
editPlayer2Element.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

startNewGameBtnElement.addEventListener('click', startNewGame);

for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener('click', selectGameField)
}

