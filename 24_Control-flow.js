//AND operator
const debitCard = true;
const smartcard = true;
const atmcard = true;

if(debitCard && smartcard && atmcard && 2==2){
    console.log("You can buy your product")
}else{
    console.log("Please show me your card");
}

const UserLogedinEmail = true;
const UserLogedinGoogle = false;

//OR operator
if(UserLogedinEmail || UserLogedinGoogle){
    console.log("You can go now");  
}else{
    console.log("!invalid User");
    
}

//Switch case statement
const months = 4;

switch(months){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feburary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    default:
        console.log("!invalid");
        break;      
}

//Terniary operator  =>  conditions ? true : false
const icePrice = 100;
icePrice <= 90 ? console.log("less then 90") : console.log("more then 90");

//Nullish coalescing operator (??) : null undefined
val1 = 5 ?? 10;
val2 = null ?? 10;
val3 = undefined ?? 15;
val4 = undefined ?? null;
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

