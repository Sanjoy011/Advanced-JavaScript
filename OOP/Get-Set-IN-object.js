const user = {
    userName : "Sanjoy Maity",
    userPassword : "xyz@123",

    get name(){
        return this.userName.toUpperCase();
    },

    set name(value){
        this.userName = value;
    }
};

const user1 = Object.create(user);
console.log(user1);   //here this is empty object 
console.log(user1.userName);  //  Sanjoy Maity
console.log(user1.name);      //  SANJOY MAITY

user1.userName = "Sourav Maity";
console.log(user1.userName);     //  Sourav Maity
console.log(user1.name);         //  SOURAV MAITY