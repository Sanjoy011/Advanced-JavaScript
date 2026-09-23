const user = {
    name: "Sanjoy",
    age: 24,
    welcomeMessage : function(){
        console.log(`${this.name}, Welcome to our website`);
        console.log(this);
    }

}

user.welcomeMessage();
user.name = "Sandeep";
user.welcomeMessage();


//arrow functions
const model = (num1,num2) => {
    return num1 * num2;
}

console.log(model(10,2));

//Single arrow functions
const model2 = (num3,num4) => (num3 - num4);
console.log(model2(10,2));