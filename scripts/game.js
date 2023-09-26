function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('set custom names for both players!')
        return;
    }
    activePlayerNameElement.textContent = players[activePlayer].name
    gameAreaElement.style.display = 'block';
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1
    } else {
        activePlayer = 0
    }
    activePlayerNameElement.textContent = players[activePlayer].name
}

function selectGameField(event) {
    //what game field has been clicked
    //add symbol of the active player
    const selectedField = event.target
    const selectedColumn = +selectedField.dataset.col - 1;
    const selectedRow = +selectedField.dataset.row - 1;

    //dont wanna select a field that already has a symbol inside
    if (gameData[selectedRow][selectedColumn] > 0) {
        return;
    }
    selectedField.textContent = players[activePlayer].symbol; //players[0];
    selectedField.classList.add('disabled');

    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    console.log(gameData)
    //switch to the other player
    switchPlayer();
    //keep track of the selected fileds to which player doeas a field belong
}