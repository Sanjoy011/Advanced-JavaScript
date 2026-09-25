class user {
    constructor(username,emailId,password){
        this.name = username;
        this.email = emailId;
        this.passId = password;
    }

    encryptPassword(){
        return `${this.passId}hxfrtydk`
    }
    chengeUsername(){
        return`${this.name.toUpperCase()}`
    }
}

const user1 = new user("Sanjoy Bhai","maityda202@gmail.com","jbsdtblxs");
console.log(user1);
console.log(`chenge the password ${user1.encryptPassword()}`);
console.log(user1.passId);
console.log(user1.chengeUsername());