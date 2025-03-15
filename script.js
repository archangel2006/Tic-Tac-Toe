let boxes = document.querySelectorAll(".box");   //select all box using class .box
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new");
let messageContainer = document.querySelector(".message-container");
let message = document.querySelector("#message");


let turnX=true  //PlayerX PlayerO

const winPatterns = [ //array of all possible wins
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach ((box) => {   //to display text when box is clicked
    box.addEventListener("click",() => {
        //console.log("box clicked");
        if (turnX) {
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;

        checkWinner();
    });   
}); 

const showWinner = (winner) => {
    message.innerText = `Congratulations, Winner is ${winner}`;
    messageContainer.classList.remove("hide");
}; 

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};

const checkWinner = () => {
    for (let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        //console.log(
        //    boxes[pattern[0]].innerText,
        //    boxes[pattern[1]].innerText,
        //    boxes[pattern[2]].innerText,);

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if (pos1Val===pos2Val && pos2Val===pos3Val){
                //console.log("Winner!",pos1Val);
                disableBoxes()
                showWinner(pos1Val);
                return; // Stop further checks once a winner is found
            }
        }
    }
    // Check if it's a draw using an if-else structure
    if ([...boxes].every(box => box.innerText !== "")) {  
        message.innerText = "It's a DRAW.";
        messageContainer.classList.remove("hide");
        disableBoxes(); // Stop further moves
    }
};

const resetGame = () => {
    turnX=true
    enableBoxes();
    messageContainer.classList.add("hide");
};

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);


