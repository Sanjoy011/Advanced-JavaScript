//Function with object
const user = {
    userName : "Sanjoy",
    price : 200
}

function cartAdd(anycard){
    return `Client name is: ${anycard.userName} and price is: ${anycard.price}.`
}

console.log(cartAdd(user));

// Modify objects value...
console.log(cartAdd({
    userName : "Sourav",
    price : 400
}));

//Function with array
const UserNameList = ["Sanjoy", 24,"Sourav",34,"Pritam",21,"Sandeep",41];

function userListArray(anylist){
    return anylist[4];   //Pritam
}
console.log(userListArray(UserNameList));

//modify array value...
console.log(userListArray([1000,2000,500,"DJ","Pritam"]));
