let num = 20;
console.log(num++);

let userOne = {
    name : "sanjoy",
    email : "maitysanjoy202@gmail.com"
};

let userTwo = userOne;

console.log(userTwo);

userTwo.email = "sanjoy@google.com";
console.log(userOne.email);
console.log(userTwo.email);


const marvel_heros = ['thos','ironaman','spiderman'];
const dc_heros = ['superman','flash','batman'];

const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);

const avng_name = ['avgn1','avgn2','avgn3','avgn4'];
const all_heros_name = [...marvel_heros, ...dc_heros, ...avng_name];
console.log(all_heros_name);