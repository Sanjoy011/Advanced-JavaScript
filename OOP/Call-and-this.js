function SetUserName(username){
    this.name = username;
    console.log("SetUserName is called");
}

function CreateUserName(username,emailId,password){
    SetUserName.call(this,username);
    this.email = emailId;
    this.password = password
}

const User = new CreateUserName("Sanjoy","maitysanjoy202@gmail.com","12345");
console.log(User);


//Implicit call
let result = "5" * 2;
console.log(result);  

// Explicit call
let age = Number("25");
console.log(age);