// filter of an Array.
const myNumbers = [10,2,4,5,25,54,32,23,65,76,87,65];
const myNums = myNumbers.filter( (nums) => nums > 10).sort( (a,b) => a-b);
console.log(myNums);

//Sorting of an Array.
const sortArray = myNumbers.sort( (a,b) => a - b);
console.log(sortArray);


//Same case using ForEach 

const newArray = [];
myNumbers.forEach( (nums) => {
    if (nums > 5) {
        newArray.push(nums);
    }
});
console.log(`New Array Push :- [${newArray}]`);

const books = [
    {
        bookName: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        publisher: "O'Reilly Media",
        subject: "JavaScript"
    },
    {
        bookName: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        publisher: "No Starch Press",
        subject: "JavaScript"
    },
    {
        bookName: "You Don't Know JS",
        author: "Kyle Simpson",
        publisher: "O'Reilly Media",
        subject: "JavaScript"
    },
    {
        bookName: "Clean Code",
        author: "Robert C. Martin",
        publisher: "Prentice Hall",
        subject: "Programming"
    },
    {
        bookName: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        publisher: "Addison-Wesley",
        subject: "Programming"
    },
    {
        bookName: "Design Patterns",
        author: "Erich Gamma",
        publisher: "Addison-Wesley",
        subject: "Programming"
    },
    {
        bookName: "HTML and CSS",
        author: "Jon Duckett",
        publisher: "Wiley",
        subject: "Web Development"
    },
    {
        bookName: "Learning React",
        author: "Alex Banks",
        publisher: "O'Reilly Media",
        subject: "Web Development"
    },
    {
        bookName: "CSS: The Definitive Guide",
        author: "Eric A. Meyer",
        publisher: "O'Reilly Media",
        subject: "Web Development"
    }
];

const BookName = books.filter( (bk) => bk.subject === "Web Development");
console.log(BookName);

// Same here using Forloop
const bksName =[];
const bkNames = books.forEach( (bks) => {
    if(bks.subject === "Programming"){
        bksName.push(bks);
    }
});
console.log(bksName);

//Using map method++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const myNewNums = [1,2,3,4,5,6,7,8,9];
const activeNums = myNewNums
                        .map( (nums) => nums * 10)
                        .map( (nums) => nums +1)
                        .map( (number) => number *10)
console.log(activeNums);

const filterActiveNums = activeNums.filter ( (number) => number >= 310)
console.log(filterActiveNums);


//Using reduce method

const countNumbers = [1,2,3,4,5];
const result = countNumbers.reduce( (acc,current) => acc + current,0);
console.log(result);




