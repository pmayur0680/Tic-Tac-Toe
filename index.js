let currentPlayer = 1;
let numMovesDone = 0;
// create empty 3x3 board
let boardState = Array.from(Array(3), () => new Array(3));
// select elements
const gameHeading = document.getElementById('game-heading');
const gameSquares = document.querySelectorAll('.game-square');
const restartButton = document.getElementById('restart-button');
restartButton.addEventListener('click', restartGame);
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
    gameSquare.disabled = true;
    boardState[row][col] = currentPlayer;
    numMovesDone++;
    // check for condition if user win, else if game tied else move turn to next player
    if(didPlayerWin(row, col)) {
        gameHeading.textContent = `Player ${currentPlayer} WON`;     
        endGame();
    } else if(numMovesDone >= 9) {
        // game tied, no more choice available        
        gameHeading.textContent = `Tie Game!`;  
        endGame();        
    } else {
        // toggle player
        currentPlayer = currentPlayer === 1 ? 2: 1;
        gameHeading.textContent = `Player ${currentPlayer}'s Turn`;       
    } 
}    

function didPlayerWin(row, col) {
  // check for all win possibilities for currentPlayer, user last clicked
  // 1. check for WIN in current row clicked, horizontal WIN
  const wonHorizontal = boardState[row][0] === currentPlayer && 
                        boardState[row][1] === currentPlayer && 
                        boardState[row][2] === currentPlayer;
  // 2. check for WIN in current col clicked, verticle WIN
  const wonVerticle = boardState[0][col] === currentPlayer && 
                      boardState[1][col] === currentPlayer && 
                      boardState[2][col] === currentPlayer;
  // 3. check for Diagonal WIN 
  let wonDiagonal = false;
  if(boardState[1][1] === currentPlayer) {
    // only go for check if middle is currentPlayer
    if(boardState[0][0] === currentPlayer && boardState[2][2] === currentPlayer)
    wonDiagonal = true;
    else if(boardState[0][2] === currentPlayer && boardState[2][0] === currentPlayer)
    wonDiagonal = true;    
  }  
  return wonHorizontal || wonVerticle || wonDiagonal;
}

function endGame() {
    // enable reset button and disable the board
    restartButton.style.display = 'block';
    gameSquares.forEach(gameSquare => {
    gameSquare.disabled = true;
    })      
}

function restartGame() {
 // reset board and states   
 boardState = Array.from(Array(3), () => new Array(3));
 currentPlayer = 1;
 numMovesDone = 0;
 gameHeading.textContent = `Player ${currentPlayer}'s Turn`; 
 gameSquares.forEach(gameSquare => {
    gameSquare.textContent = '';
    gameSquare.disabled = false;
 })        
 restartButton.style.display = 'none';
}