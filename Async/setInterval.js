let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let message = document.getElementById("message");

let time;
start.addEventListener("click", () => {
    console.log("Let's go with my Friends");
    message.innerHTML = "Let's go with my Friends";

    time = setInterval( () => {
        console.log("We are going to forest..🌲");
        message.innerHTML = "We are going to forest..🌲";
    },3000);
});


stop.addEventListener("click", () => {
    clearInterval(time);

    console.log("We are stopped guy's");
    message.innerHTML = "We are stopped guy's..";
});