const boxes = document.getElementsByClassName('boxes')
// boxes => all boxes 
// x or o => to set x or O into box
function selectWinBoxes(b1,b2,b3){
    b1.classList.add ("win"); 
    b2.classList.add ("win"); 
    b3.classList.add ("win"); 
    turn.innerHTML = b1.innerHTML + " Won Congrat";  
}

//Check Result Posibility
function checkWinner(){
    if (boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[1].innerHTML && boxes[0].innerHTML == boxes[2].innerHTML)
    selectWinBoxes(boxes[0],boxes[1],boxes[2]);

    else if (boxes[3].innerHTML != "" && boxes[3].innerHTML == boxes[4].innerHTML && boxes[3].innerHTML == boxes[5].innerHTML)
    selectWinBoxes(boxes[3],boxes[4],boxes[5]); 

    else if (boxes[6].innerHTML != "" && boxes[6].innerHTML == boxes[7].innerHTML && boxes[6].innerHTML == boxes[8].innerHTML)
    selectWinBoxes(boxes[6],boxes[7],boxes[8]);

    else if (boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[3].innerHTML && boxes[0].innerHTML == boxes[6].innerHTML)
    selectWinBoxes(boxes[0],boxes[3],boxes[6]);

    else if (boxes[1].innerHTML != "" && boxes[1].innerHTML == boxes[4].innerHTML && boxes[1].innerHTML == boxes[7].innerHTML)
    selectWinBoxes(boxes[1],boxes[4],boxes[7]);

    else if (boxes[2].innerHTML != "" && boxes[2].innerHTML == boxes[5].innerHTML && boxes[2].innerHTML == boxes[8].innerHTML)
    selectWinBoxes(boxes[2],boxes[5],boxes[8]);
    
    else if (boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[4].innerHTML && boxes[0].innerHTML == boxes[8].innerHTML)
    selectWinBoxes(boxes[0],boxes[4],boxes[8]);

    else if (boxes[2].innerHTML != "" && boxes[2].innerHTML == boxes[4].innerHTML && boxes[2].innerHTML == boxes[6].innerHTML)
    selectWinBoxes(boxes[2],boxes[4],boxes[6]);
}
// Set event on click
X_or_O = 0; 
for(let i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function(){
        // not allow to change the value of the box
        if (this.innerHTML != "X" && this.innerHTML != "O") {
        // switch player
         if (X_or_O%2 == 0){
            console.log(X_or_O);
            this.innerHTML = "X"; 
            turn.innerHTML = "O Turn Now"; 
            checkWinner(); 
            X_or_O += 1;
         }
         else {
            console.log(X_or_O);
            this.innerHTML = "O";
            turn.innerHTML = "X Turn Now"; 
            checkWinner();
            X_or_O += 1; 
         }
        } 
    }
}
// Reset button
function newGame(){
    for(let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove("win"); 
        boxes[i].innerHTML= "";
        turn.innerHTML = "Play"; 
    }
}
    