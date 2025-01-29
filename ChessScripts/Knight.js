function isValidKnight() {
            const dragParentID = Number(dragElementParentID);
            let dropElementID = Number(dropID);
            const dragElementSide = document.getElementById(dragElementParentID).firstChild.getAttribute('side');

            const possibleMoves = [
                //forward
                dragParentID + 21, dragParentID + 19,
                dragParentID + 12, dragParentID + 8,
                //backward
                dragParentID - 21, dragParentID - 19,
                dragParentID - 12, dragParentID - 8
            ];

            if (possibleMoves.includes(dropElementID)) {
                if(dropElementID<10){
                    dropElementID="0"+ String(dropElementID);
                }
                const dropElement = document.getElementById(dropElementID);
                if (dropElement.firstChild === null || dropElement.firstChild.getAttribute('side') !== dragElementSide) {
                    return true;
                }
            }
            return false;
}