const btn1 = document.getElementById("btn-1");
btn1.onclick = () => {
    console.log("Single clicked!");
};

const message = document.querySelector("#btn-2");
message.ondblclick = () => {
    console.log("This message show after double clicked..")
};

const box1 = document.querySelector(".box");
// box1.onclick = () => {
//     box1.style.backgroundColor = "green"
//     box1.style.margin = "40px"
//     box1.style.padding = "15px"
// }

box1.onmouseover = () => {
    box1.style.backgroundColor = "red";
    box1.style.margin = "40px"
    box1.style.padding = "15px"
    box1.style.cursor = "pointer";
}
box1.onmouseout = () => {
    box1.style.backgroundColor = "";
    box1.style.margin = "0px"
    box1.style.padding = "0px"
}

// Event object

const box2 = document.querySelector(".box1");
box2.onmouseover = (event) => {
    event.target.style.backgroundColor = "pink"
    event.target.style.margin = "40px"
    event.target.style.padding = "15px"
    event.target.style.cursor = "pointer";
};
box2.onmouseout = (event) => {
    event.target.style.backgroundColor = ""
    event.target.style.margin = ""
    event.target.style.padding = ""

};