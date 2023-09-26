function startNewGame() {
    if (players[0].name === "" || players[1].name === "") {
        alert("set custom names for both players!");
        return;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = "block";
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
    //what game field has been clicked
    //add symbol of the active player
    const selectedField = event.target;
    const selectedColumn = +selectedField.dataset.col - 1;
    const selectedRow = +selectedField.dataset.row - 1;

    //dont wanna select a field that already has a symbol inside
    if (gameData[selectedRow][selectedColumn] > 0) {
        return;
    }
    selectedField.textContent = players[activePlayer].symbol; //players[0];
    selectedField.classList.add("disabled");

    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    // console.log(gameData);

    const winnerId = checkForGameOver();
    console.log(winnerId);
    currentRound++;
    //switch to the other player
    switchPlayer();
    //keep track of the selected fileds to which player doeas a field belong
}

function checkForGameOver() {
    // Checking the rows for equality
    for (let i = 0; i < 3; i++) {
        if (
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]
        ) {
            return gameData[i][0];
        }
    }

    // Checking the columns for equality
    for (let i = 0; i < 3; i++) {
        if (
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[0][i] === gameData[2][i]
        ) {
            return gameData[0][i];
        }
    }

    // Diagonal: Top left to bottom right
    if (
        gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]
    ) {
        return gameData[0][0];
    }

    // Diagonal: Bottom left to top right
    if (
        gameData[2][0] > 0 &&
        gameData[2][0] === gameData[1][1] &&
        gameData[1][1] === gameData[0][2]
    ) {
        return gameData[2][0];
    }
    if (currentRound === 9) {
        return -1;
    }

    return 0;
}