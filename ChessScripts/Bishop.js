function isValidBishop() {
    const dragParentID = Number(dragElementParentID);
    let dropElementID = Number(dropID);
    const dragElementSide = document.getElementById(dragElementParentID).firstChild.getAttribute('side');

    const rowDiff = Math.abs(Math.floor(dragParentID / 10) - Math.floor(dropElementID / 10));
    const colDiff = Math.abs(dragParentID % 10 - dropElementID % 10);

    if (rowDiff === colDiff) {
        const rowDirection = (dropElementID > dragParentID) ? 1 : -1;
        const colDirection = (dropElementID % 10 > dragParentID % 10) ? 1 : -1;

        let currentID = dragParentID + (10 * rowDirection) + colDirection;
        while (currentID !== dropElementID) {
            //if we are going forward and there is element and we try to jump then...
            if (document.getElementById(currentID).firstChild !== null) {
                return false;
            }
            currentID += (10 * rowDirection) + colDirection;

        }
        if (dropElementID < 10) {
            dropElementID = "0" + String(dropElementID);
        }
        const dropElement = document.getElementById(dropElementID);
        console.log(dropElement);

        if (dropElement.firstChild === null || dropElement.firstChild.getAttribute('side') !== dragElementSide) {
            return true;
        }
    }
    return false;
}