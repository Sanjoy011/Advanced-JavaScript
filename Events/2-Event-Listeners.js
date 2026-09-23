const box = document.querySelector(".box");
box.addEventListener("mouseover", () => {
    console.log("Red");
    box.style.backgroundColor = "green";
    box.style.width = "200px";
    box.style.height = "200px";
    box.style.padding = "50px";
    box.style.justifyContent = "center";
    box.style.alignItems = "center";
    box.style.textAlign = "center";
    box.style.display = "flex";
    box.style.borderRadius = "20px";
    box.style.fontSize = "50px";
    box.style.border = "2px solid black";
    box.style.cursor = "pointer";

});

box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "aquamarine";
    box.style.width = "200px";
    box.style.height = "200px";
    box.style.padding = "50px";
    box.style.justifyContent = "center";
    box.style.alignItems = "center";
    box.style.textAlign = "center";
    box.style.display = "flex";
    box.style.borderRadius = "20px";
    box.style.fontSize = "50px";
    box.style.border = "2px solid black";
    box.style.cursor = "pointer";

})
box.addEventListener("click", () => {
    box.style.backgroundColor = "lightblue";
    box.style.width = "200px";
    box.style.height = "200px";
    box.style.padding = "50px";
    box.style.justifyContent = "center";
    box.style.alignItems = "center";
    box.style.textAlign = "center";
    box.style.display = "flex";
    box.style.borderRadius = "20px";
    box.style.fontSize = "50px";
    box.style.border = "2px solid black";
    box.style.cursor = "pointer";

})