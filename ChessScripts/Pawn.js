function isValidPawn() {
            const start = [10, 11, 12, 13, 14, 15, 16, 17]
            if (start.includes(Number(dragElementParentID))) {
                if ((Number(dragElementParentID) + 10) === Number(dropID) || (Number(dragElementParentID) + 20) === Number(dropID) && document.getElementById(dropID).firstChild === null) {
                    return true;
                }
            }
            if (Number(dragElementParentID) + 10 === Number(dropID) && document.getElementById(dropID).firstChild === null) {
                return true;
            }
            if ((Number(dragElementParentID) + 9 === Number(dropID) || Number(dragElementParentID) + 11 === Number(dropID)) &&
                document.getElementById(dropID).firstChild !== null && document.getElementById(dropID).firstChild.getAttribute("side") !== player ) {
                return true;
            }
            return false;
}