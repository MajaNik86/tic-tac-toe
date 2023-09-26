function openPlayerConfig(event) {
    const selectedPlayerId = +event.target.dataset.playerid; //convert to string
    editedPlayer = selectedPlayerId;
    playerConfigOverlay.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlay.style.display = 'none';
    backdropElement.style.display = 'none';
    // formElement.firstElementChild.classList.remove('error');
    divErrorElement.classList.remove('error');
    errorOutputElement.textContent = '';
    document.getElementById('playername').value = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim();


    if (!enteredPlayerName) { //enteredPlayerName ===''
        divErrorElement.classList.add('error');
        errorOutputElement.textContent = "Please enter a valid name";
        return;
    }
    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    if (editedPlayer === 1) {
        players[0].name = enteredPlayerName
    } else {
        players[1].name = enteredPlayerName
    }
    closePlayerConfig();

}