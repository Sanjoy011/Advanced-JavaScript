let changeColor = document.querySelector(".colour");
let currentMood = "light" //dark;
let body = document.querySelector("body");

changeColor.addEventListener("click", () => {
    if(currentMood == "light"){
        currentMood = "dark";
        body.style.backgroundColor = "black";
    }else{
        currentMood = "light";
        body.style.backgroundColor = "white";
    }
    console.log(currentMood);
});