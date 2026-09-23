if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);  // is a block scope
// console.log(b);  // same this is block scope
console.log(c);

//nested functions scope
function one(){
    const name = "Sanjoy";

    function two(){
        const age = 25;
        console.log(name +":"+ age);
    }
    // console.log(age);

    two();
}
one();

//Same here using if-else 

if(true){
    const userName = "Sanjoy Bhai";
    if(userName === "Sanjoy Bhai"){
        const website = " Youtube";
        console.log(userName + website);
    }
    // console.log(website);  //because of website is a local scope.
}
// console.log(userName);  //same here userName is a local scope.


//Hoisting

addTwoNumbers(3,2);
function addTwoNumbers(num1, num2){
    console.log(num1+num2);
}

// console.log(Number(5));  // in this case cannot access 'Number' before initialization
const Number = function(value){
    return value + 2;
}
console.log(Number(5)); 
