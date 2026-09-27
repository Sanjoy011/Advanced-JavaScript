//1st-Method
const data = "Hello JavaScript Programmer";
const result = data.split(" ").reverse().join(" ");
console.log(result);

//2nd-Method
const dataOne = "Today i complete javaScript playlist";
const dataOneSplit = dataOne.split(" ");
const pushData = [];
for(let i = dataOneSplit.length - 1; i >= 0; i--){
    pushData.push(dataOneSplit[i]);
};
const joinData = pushData.join(" ");
console.log(joinData);