function GameBoard() {
    let board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

    const getBoard = () => board;

    const play = (indexObj, player) => {
        let x = indexObj.x;
        let y = indexObj.y;
        if (board[x][y] !== 0) {
            alert("You can't overwrite an already played position");
            return false;
        }
        board[x][y] = player.token;
        return true;
    };

    const reset = () => {
        board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    };

    return {
        getBoard,
        play,
        reset
    };
}

function Player(name, token) {
    return {
        name,
        token
    };
}

function GameController() {
    const board = GameBoard();
    const player1 = Player("X", 1);
    const player2 = Player("O", 2);
    let currentPlayer = player1;

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    const resetGame = () => board.reset();

    const getCurrentPlayer = () => currentPlayer;

    const getBoard = () => board.getBoard();

    const play = (x, y) => {
        const pos = { x, y };
        const success = board.play(pos, currentPlayer);
        if (!success) return false;

        if (isWinner(board.getBoard())) {
            setTimeout(() => {
                endGame(currentPlayer);
                resetGame();
                clearBoardUI();  // UI reset
            }, 100);
            return true;
        }

        if (isDraw(board.getBoard())) {
            setTimeout(() => {
                endGame(currentPlayer, true);
                resetGame();
                clearBoardUI();
            }, 100);
            return true;
        }

        switchPlayer();
        return true;
    };

    return {
        play,
        resetGame,
        getCurrentPlayer,
        getBoard
    };
}

function isDraw(board) {
    return board.flat().every(cell => cell !== 0);
}

function isWinner(board) {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== 0 && board[i][0] === board[i][1] && board[i][1] === board[i][2]) return true;
        if (board[0][i] !== 0 && board[0][i] === board[1][i] && board[1][i] === board[2][i]) return true;
    }
    if (board[0][0] !== 0 && board[0][0] === board[1][1] && board[1][1] === board[2][2]) return true;
    if (board[0][2] !== 0 && board[0][2] === board[1][1] && board[1][1] === board[2][0]) return true;
    return false;
}

function endGame(player, draw = false) {
    if (draw) {
        alert("It's a draw!");
    } else {
        alert(player.name + " won the game!");
    }
}

function ScreenController() {
    const Game = GameController();

    const cellpressed = (e) => {
        let x = parseInt(e.target.dataset.x);
        let y = parseInt(e.target.dataset.y);

        const moveSuccessful = Game.play(x, y);
        if (!moveSuccessful) return;

        const board = Game.getBoard();
        const value = board[x][y];

        updateScreen(value, e.target);
        e.target.removeEventListener("click", cellpressed); // disable further clicks
    };

    const updateScreen = (value, cell) => {
        if (value === 1) {
            cell.textContent = "X";
            cell.style.color = "red";
        } else if (value === 2) {
            cell.textContent = "O";
            cell.style.color = "blue";
        }
    };

    const clearBoardUI = () => {
        const cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.textContent = "";
            cell.style.color = "black";
            cell.addEventListener("click", cellpressed); // re-enable clicks
        });
    };

    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("click", cellpressed);
    });

    // expose clearBoardUI for GameController to use
    window.clearBoardUI = clearBoardUI;
}

ScreenController();
