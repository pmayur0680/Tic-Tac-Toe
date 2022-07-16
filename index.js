let currentPlayer = 1;
// create empty 3x3 board
let boardState = Array.from(Array(3), () => new Array(3));
// select elements
const gameHeading = document.getElementById('game-heading');
const gameSquares = document.querySelectorAll('.game-square');
const restartButton = document.getElementById('restart-button');

// get row, col clicked for each button
gameSquares.forEach( (gameSquare, i) => {
    gameSquare.addEventListener('click', () => {
        const row = Math.floor(i / 3);
        const col = i % 3;
        // let makeMove check the logic
        makeMove(gameSquare, row, col);
    });
});

function makeMove(gameSquare, row, col) {
    // based on player 1/2, set X/O
    gameSquare.textContent = currentPlayer === 1 ? 'X': 'O';
    boardState[row][col] = currentPlayer;
    // toggle player
    currentPlayer = currentPlayer === 1 ? 2: 1;
    gameHeading.textContent = `Player ${currentPlayer}'s Turn`;
    console.log(boardState);
}