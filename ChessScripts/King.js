function isValidKing() {
            const dragParentID = Number(dragElementParentID);
            let dropElementID = Number(dropID);
            const dragElementSide = document.getElementById(dragElementParentID).firstChild.getAttribute('side');

            const rowDiff = Math.abs(Math.floor(dragParentID / 10) - Math.floor(dropElementID / 10));
            const colDiff = Math.abs(dragParentID % 10 - dropElementID % 10);

            // King moves one square in any direction
            if ((rowDiff === 1 && colDiff <= 1) || (colDiff === 1 && rowDiff <= 1)) {
                if(dropElementID<10){
                    dropElementID="0"+ String(dropElementID);
                }
                const dropElement = document.getElementById(dropElementID);
                // The move is valid if the destination is empty or occupied by an opponent's piece
                if (dropElement.firstChild === null || dropElement.firstChild.getAttribute('side') !== dragElementSide) {
                    return true;
                }
            }
            return false;
}