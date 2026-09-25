let User = {
    username : "Sanjoy",
    emailId : "maitysanjoy202@gmail.com",
    password : 12345,

    logIn : () => {
        console.log("User logIn....")
    }
}

User.logIn();
console.log(`User name is: ${User.username}`);
console.log(`User email id is: ${User.emailId}`);
console.log(`User password is: ${User.password}`);

