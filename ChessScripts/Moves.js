let dragElement;
let dragElementParentID;
let dragElementName;
let dropID;

function Moves() {
    const pieces = document.querySelectorAll(".square")
    pieces.forEach(e => {
        if (e.firstChild) {
            e.firstChild.addEventListener("dragstart", drag)
        }
        e.addEventListener("dragover", over)
        e.addEventListener("dragleave", leave)
        e.addEventListener("drop", drop)
    });

    function drag(e) {
        dragElement = e.target
        dragElementParentID = e.target.parentNode.id
        dragElementName = e.target.getAttribute("name")
        console.log(dragElement, dragElementParentID, dragElementName);
    }

    function over(e) {
        e.preventDefault();
        if (e.target.hasAttribute("side")) {
            dropID = e.target.parentNode.id
        }
        else {
            dropID = e.target.id
        }
        let validMoveColor;
        switch (dragElementName) {
            case 'Pawn':
                validMoveColor = isValidPawn()
                break;
            case 'Knight':
                validMoveColor = isValidKnight()
                break;
            case 'King':
                validMoveColor = isValidKing()
                break;
            case 'Queen':
                validMoveColor = isValidQueen()
                break;
            case 'Rook':
                validMoveColor = isValidRook()
                break;
            case 'Bishop':
                validMoveColor = isValidBishop()
                break;
        }
        if (validMoveColor) {
            e.target.style.backgroundColor = "#d3d3d3";
        }
        else {
            e.target.style.backgroundColor = "#C60C30";
        }
    }

    function leave(e) {
        e.target.style.backgroundColor = "";
    }

    function drop(e) {
        e.target.style.backgroundColor = "";
        if (e.target.hasAttribute("side")) {
            dropID = e.target.parentNode.id
        }
        else {
            dropID = e.target.id
        }
        let validMove;
        switch (dragElementName) {
            case 'Pawn':
                validMove = isValidPawn()
                break;
            case 'Knight':
                validMove = isValidKnight()
                break;
            case 'King':
                validMove = isValidKing()
                break;
            case 'Queen':
                validMove = isValidQueen()
                break;
            case 'Rook':
                validMove = isValidRook()
                break;
            case 'Bishop':
                validMove = isValidBishop()
                break;
        }
        if (validMove) {
            e.stopPropagation();
            if (e.target.hasAttribute("side")) {
                console.log(e.target.parentNode);
                e.target.parentNode.append(dragElement);
                if (dragElementName === 'Pawn') {
                    isPawnPromotion(e.target.parentNode);
                }
                else {
                    changePlayer();
                }
                e.target.parentNode.removeChild(e.target);
            }
            else {
                e.target.append(dragElement);
                if (dragElementName === 'Pawn') {
                    isPawnPromotion(e.target);
                }
                else {
                    changePlayer();
                }
            }
            
            e.target.style.backgroundColor = "";
        }
    }
}