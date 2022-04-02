// // output console
// console.log('My First Module');

//  mutiplier functionby 2
let myMultiplier = (x)=>{
let y = 2*x;
return y;
}
// param to function
console.log(myMultiplier(4));

// export function for others
module.exports.myMultiplier = myMultiplier;
console.log(module);