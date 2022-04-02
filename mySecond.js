// function multiplies by 3
let myMultiplier = (x) => {
let y = 3*x;
return y; 
}
console.log(myMultiplier(4));

// export mutiplier function for others
module.exports.myMultiplier = myMultiplier;
console.log(module);