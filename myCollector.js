// impoorted from myFirst & mySec functions
const myFexp = require ('./myFirst');
const mySexp = require ('./mySecond');


// using both mutiplier functions respectively
console.log(myFexp.myMultiplier(5));
console.log(mySexp.myMultiplier(5));

// using myFirst multiplier function 
let myFirstResult = myFexp.myMultiplier(14);
let writeFirstResult ='The value of 14 when passed through the myMultiplier function is ' +'('+ myFirstResult +')'+ '.';
// console.log(writeFirstResult);

// imported fs file for read & write
const fs = require('fs');
fs.writeFileSync('results.txt', writeFirstResult +"\n");

// using mySecond multiplier function 
let mySecResult = mySexp.myMultiplier(14);
let writeSecResult = 'The value of 14 when passed through the myMultiplier function is '+ '('+ mySecResult + ')'+'.';

// writing the results in seperate text file
fs.writeFileSync('results.txt', writeSecResult)
fs.appendFileSync('results.txt', writeSecResult)
