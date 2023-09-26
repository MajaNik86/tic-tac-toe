const playerConfigOverlay = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');


const editPlayer1Element = document.getElementById('edit-player1-btn');
const editPlayer2Element = document.getElementById('edit-player2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');


editPlayer1Element.addEventListener('click', openPlayerConfig);
editPlayer2Element.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);