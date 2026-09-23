// function sayHello(number1, number2){
//     console.log(number1 + number2);
// }
// sayHello(2,null);

// function addTwoNumbers(num1,num2){
//     const result = num1 + num2;
//     return result;
// }

// const TotalValue = addTwoNumbers(20,10);
// console.log(TotalValue);

function logInUserMessage(username = "Sanjoy"){
    if(!username){
        return "Please enter a valid name.."
    }
    return `${username} just loged in`;
}
console.log(logInUserMessage("Krishna"))