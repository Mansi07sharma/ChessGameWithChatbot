function changePlayer(){
    if(player=='silver'){
        player='golden';
    }
    else{
        player='silver';
    } 
    const ids=document.querySelectorAll(".square")
    ids.forEach(id=>{
        let currentId = id.getAttribute('id');
        let newId = reverseId(currentId);
        id.setAttribute('id', newId);
        if(Number(newId)>=0&&Number(newId)<=17){
            id.classList.add('highlight');
        }
        else{
            id.classList.remove('highlight');
        }

        //change draggablitity
        if(id.firstChild){
            if(id.firstChild.getAttribute('side')===player){
                id.firstChild.setAttribute('draggable', 'true');
            }
            else{
                id.firstChild.setAttribute('draggable', 'false');
            }
        }
    })
}

function reverseId(id){
    let row = id[0];
    let col = id[1];
    let newRow = 7-row;
    let newCol = 7-col;
    return `${newRow}${newCol}`;
}