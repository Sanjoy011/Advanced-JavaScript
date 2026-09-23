function addTwoNumbers(a,b){
    console.log(a + b);
}
function callBacksTwoNumbers(x,y,addTowNumbersCall){
    addTowNumbersCall(x,y);
}

callBacksTwoNumbers(3,2,addTwoNumbers);


const hello = () => {
    console.log("Sanjoy");
}

setTimeout(hello, 3000);