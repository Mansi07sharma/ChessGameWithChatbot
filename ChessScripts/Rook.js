function isValidRook() {
            const dragParentID = Number(dragElementParentID);
            let dropElementID = Number(dropID);
            const dragElementSide = document.getElementById(dragElementParentID).firstChild.getAttribute('side');

            const rowDiff = Math.abs(Math.floor(dragParentID / 10) - Math.floor(dropElementID / 10));
            const colDiff = Math.abs(dragParentID % 10 - dropElementID % 10);

            // Rook moves in straight lines, so either rowDiff or colDiff should be 0
            if (rowDiff === 0 || colDiff === 0) {
                const rowDirection = rowDiff === 0 ? 0 : (dropElementID > dragParentID ? 1 : -1);
                const colDirection = colDiff === 0 ? 0 : (dropElementID % 10 > dragParentID % 10 ? 1 : -1);

                let currentID = dragParentID + (10 * rowDirection) + colDirection;
                while (currentID !== dropElementID) {
                    // If there is a piece in the path, the move is invalid
                    if(currentID<10){
                        currentID="0"+ String(currentID);
                    }
                    if (document.getElementById(currentID).firstChild !== null) {
                        return false;
                    }
                    currentID=Number(currentID) +(10 * rowDirection) + colDirection;  
                }

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