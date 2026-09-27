let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach( (box) => {
    box.addEventListener("click", () => {
        console.log("now box is clicked");
        if(turnO){
            box.innerHTML ="O";
            turnO = false
        }else{
            box.innerHTML ="X";
            turnO = true
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for(let patterns of winPatterns){
        let pos1Val = boxes[patterns[0]].innerHTML
        let pos2Val = boxes[patterns[1]].innerHTML
        let pos3Val = boxes[patterns[2]].innerHTML


        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            };
        };
    };
};

const showWinner = (winner) =>{
    msg.innerText = `What a game!🔥 ${winner} Congratulations! 🏆🎉`;
    // newGameBtn.style.display = "block";
    newGameBtn.style.margin = "auto";
    newGameBtn.style.marginTop = "20px";
    msg.classList.add("shake");
    disableBoxes();
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;    
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    // newGameBtn.style.display = "none";
    msg.innerText = "👀Who will win? Let’s find out!🏆"
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);