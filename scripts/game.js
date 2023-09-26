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
    //which game field has been clicked
    //add symbol of the active player
    event.target.textContent = players[activePlayer].symbol; //players[0];
    event.target.classList.add('disabled');
    //switch to the other player
    switchPlayer();
    //dont wonna select field that already has a symnbol inside
    //keep track of the selected fileds to which player doeas a field belong
}