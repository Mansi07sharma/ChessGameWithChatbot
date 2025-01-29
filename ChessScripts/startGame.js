let player;
let isGameStart = false;
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const botai = document.querySelector('.botai');
    const gameBoard = document.getElementById('chessboard');
    const goldenBtn = document.getElementById('golden');
    const silverBtn = document.getElementById('silver');

    goldenBtn.addEventListener('click', () => {
        startGame('golden');
    });

    silverBtn.addEventListener('click', () => {
        startGame('silver');
    });

    function startGame(choice) {
        popup.classList.add('hidden');
        botai.classList.remove('hidden');
        popup.classList.remove('center')
        gameBoard.classList.remove('hidden');
        player = choice;
        isGameStart = true;
        createBoard()
    }
});


const chessPeices = [
    [goldenRook, goldenKnight, goldenBishop, goldenKing, goldenQueen, goldenBishop, goldenKnight, goldenRook],
    [goldenPawn, goldenPawn, goldenPawn, goldenPawn, goldenPawn, goldenPawn, goldenPawn, goldenPawn],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    [silverPawn, silverPawn, silverPawn, silverPawn, silverPawn, silverPawn, silverPawn, silverPawn],
    [silverRook, silverKnight, silverBishop, silverKing, silverQueen, silverBishop, silverKnight, silverRook]
]

const pieceName = [
    ['Rook', 'Knight', 'Bishop', 'King', 'Queen', 'Bishop', 'Knight', 'Rook'],
    ['Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn'],
    ['Rook', 'Knight', 'Bishop', 'King', 'Queen', 'Bishop', 'Knight', 'Rook']
]

function createBoard() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let squares = document.createElement("div")
            squares.setAttribute("class", "square")
            squares.setAttribute("id", `${7 - i}${7 - j}`)
            if ((i + j) % 2 == 0) {
                squares.classList.add("white")
            }
            if (chessPeices[i][j]) {
                if (player === 'silver') {
                    squares.append(chessPeices[i][j].cloneNode(true))
                    if (i < 2) {
                        squares.firstChild.setAttribute("side", "golden")
                        squares.firstChild.setAttribute("draggable", "false")
                    } else if (i > 5) {
                        squares.firstChild.setAttribute("side", "silver")
                        squares.firstChild.setAttribute("draggable", "true")
                    }
                }
                else {
                    squares.append(chessPeices[7 - i][j].cloneNode(true))
                    if (i < 2) {
                        squares.firstChild.setAttribute("side", "silver")
                        squares.firstChild.setAttribute("draggable", "false")
                    } else if (i > 5) {
                        squares.firstChild.setAttribute("side", "golden")
                        squares.firstChild.setAttribute("draggable", "true")
                    }
                }
                squares.firstChild.setAttribute("name", pieceName[i][j])
                if (`${7 - i}${7 - j}` >= 0 && `${7 - i}${7 - j}` <= 17) {
                    squares.classList.add('highlight')
                }
            }
            document.querySelector(".chessboard").append(squares)
        }
    }
    Moves()
}





