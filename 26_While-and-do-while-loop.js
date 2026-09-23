//while loop+++++++++++++++++++++++++++++++++++++++++++++++

let myArray = ["flash", "Batman","Superman","Spiderman"];
let arr = 0;
while (arr < myArray.length) {
    // console.log(`Value is: ${myArray[arr]}`);
    if(arr === 2 && myArray[arr] === "Superman"){
        console.log(`value of ${myArray[arr]}`);
    }
    arr++;
}

//Do-While loop+++++++++++++++++++++++++++++++++++++++++++
let scope = 1;
do {
    console.log(`Value of scope : ${scope}`);
    if(scope === 5){
        console.log(`deceted of ${scope}`);
        break;
    }
    scope++;
} while (scope <= 10);
