let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");
let newGameBtn= document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let turnO=true;
const winPatterns=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],  
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
turnO=true;
enableboxes();
msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
    console.log("Box was clicked");

    if(turnO){
    box.innerText = "0";
    turnO=false;
    }

    else{
    box.innerText = "X";
    turnO=true;
    }

    box.disabled= true;
    checkWin();
    });
    });
const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () => {
    for(let box of boxes){
        box.disabled= false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}

const showDraw = () => {
    msg.innerText = "Draw!";
    msgContainer.classList.remove("hide");
    disableboxes();
};


    const checkWin = () => {

        for(let pattern of winPatterns){
            // console.log(pattern[0],pattern[1],pattern[2]);
            // console.log(boxes[pattern[0]],
            //             boxes[pattern[1]],
            //             boxes[pattern[2]]);
             let winnerFound=false;

            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[1]].innerText;    
            let pos3Val=boxes[pattern[2]].innerText;

            if(pos1Val !="" && pos2Val != "" && pos3Val != ""){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    console.log("WINNER!",pos1Val);
                    showWinner(pos1Val);
                     let winnerFound=true;
                    };
                    
                }
            }

            let allFilled=true;
            boxes.forEach((box) => {
                if(box.innerText === ""){
                    allFilled=false;
                }
            });

            if(!winnerFound && allFilled)
                showDraw();
        };

        newGameBtn.addEventListener("click", resetGame);
        resetBtn.addEventListener("click", resetGame)
    
