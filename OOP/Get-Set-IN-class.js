class user {
    constructor(username,emailid,password){
        this.name = username;
        this.useremail = emailid;
        this.userpassword = password;
    }

    //Chenge email toUpperCase
    get email(){
        return this.useremail.toUpperCase();
    }
    set email(value){
        this.useremail = value;
    }

    //chenge password
    get password(){
        return`${this.userpassword}xydvhz`;
    }
    set password(value){
        this.userpassword = value;
    }

};

const myUser = new user("Sanjoy","maitysanjoy202@gmail.com",12345);
console.log(myUser);
console.log(myUser.email);
console.log(myUser.password);

const myUser1 = new user("Sandeep","sandeep2022@gmail.com",546765);
console.log(myUser1);
console.log(myUser1.password);
console.log(myUser1.email)