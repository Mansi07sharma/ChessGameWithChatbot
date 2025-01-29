function isPawnPromotion(target){
    
    if(target.id>=70){
        document.getElementById("promotionModal").style.display = "block";
    }
    else{
        changePlayer();
    }
}

function promotePawn(newPiece){
    switch(newPiece){
        case 'Queen':
            if(player==='golden'){
                dragElement.src=goldenQueen.src;
            }
            else{
                dragElement.src=silverQueen.src;
            }
            dragElement.setAttribute("name","Queen");
            break;
        case 'Rook':
            if(player==='golden'){
                dragElement.src = goldenRook.src;
            }
            else{
                dragElement.src = silverRook.src;
            }
            dragElement.setAttribute("name","Rook");
            break;
        case 'Bishop':
            if(player==='golden'){
                dragElement.src = goldenBishop.src;
            }
            else{
                dragElement.src = silverBishop.src;
            }
            dragElement.setAttribute("name","Bishop");
            break;
        case 'Knight':
            if(player==='golden'){
                dragElement.src = goldenKnight.src;
            }
            else{
                dragElement.src = silverKnight.src;
            }
            dragElement.setAttribute("name","Knight");
            break;    
    }
    document.getElementById("promotionModal").style.display = "none";
    changePlayer();
}

