//Immediately Invoked Function Expressions IIFE 
(function addTwoNumber(num1,num2){
    console.log(num1 + num2);
})(10,20);

(function message(){
    console.log("DB connected");
})();

(() => {
    console.log("DB CONNECTED TWO");
})();

((number1,number2) => {
    console.log(number1 * number2);
})(20,5);

((name) => {
    console.log(`My name is: ${name}`)
})("Sanjoy");