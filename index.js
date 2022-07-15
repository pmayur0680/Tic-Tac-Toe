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

