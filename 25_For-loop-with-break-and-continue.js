//Multiplecation table +++++++++++++++++++++++++++++

for (let i = 1; i <= 5; i++) {
    console.log(`${i} multiplecation table in 1 to 10`);
    for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i*j}`)
   }
}

//for loop using array++++++++++++++++++++++++++++++++

let myArray = ["flash","batman","superman","spiderman"];
for(let i = 0; i < myArray.length; i++){
    const element = myArray[i];
    if(i === 2 && element === "superman"){
        console.log(`Found Superman at index ${i}`);
    }
}

//Break and Continue+++++++++++++++++++++++++++++++++++

for(let i = 1; i <= 10; i++){
    if(i === 5){
        console.log(`Deceted is ${i}`);
        continue;
    }
    if(i === 8){
        console.log(`Break the value of ${i}`);
        break;
    }
    console.log(`Value of i is : ${i}`);
}