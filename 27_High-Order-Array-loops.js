//String of Array
let greetings = ["Sanjoy","Sourav","Sandeep","Suman","Sanjib"];
for(let greet of greetings){
    // console.log(`Each of name is: ${greet}`);
}

//Number of Array
let Number = [20,30,40,50,60,70];
for(let num of Number){
    // console.log(`Number each of ${num}`);
}

//Using Map

const map = new Map();
map.set('In',"India");
map.set('USA',"United States of America");
map.set('Fr',"France");

console.log(map);

for(const [key,value] of map){
    console.log(`${key} :- ${value}`);
}

//using For-in loop
const course = {
    js : "JavaScript",
    py : "Python",
    drt : "Flatter",
    php : "PHP",
    css : "CSS"
};

for(let key in course){
    console.log(`${key} shorcut is for ${course[key]}`);
}

//Using foreach loop array of objects

const myCodeing = [
    {
        languageName : "Java",
        languageFilename : "js",
    },
    {
        languageName : "Python",
        languageFilename : "py",
    },
    {
        languageName : "PHP",
        languageFilename : "php",
    },
];

myCodeing.forEach( (items) => {
    console.log(items.languageFilename,items.languageName);
})