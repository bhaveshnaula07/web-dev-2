//  let numbers = [1, 4, 6, 8, 10];
//  let hasEven = numbers.every(x => x % 2 === 0);
//  console.log(hasEven)

//  console.log([1,2]+[2,3])

// let fruits1 = ["apple", "banana"];
// let fruits2 = ["cherry", "orange"];

//  console.log([...fruits1,...fruits2]);
 
//  let combined = fruits1.concat(fruits2);
//  console.log(combined);

// ternary operator

// condition ? true : false


// let age = 16;
// let canVote = age >= 18 ? "You can vote" : "You can't";
// console.log(canVote); 


let num = 18;
let canVote = num %2=== 0 ? "even" : "odd";
console.log(canVote); 


// let year =2100;
// let leap = (year %4 ===0 && year % 100 !== 0) || (year % 400 === 0) ? "leap year" : "not a leap year";
// console.log(leap);

// first class function

// const demo=()=>{

// }

// function sample(callback){
//     console.log("sample");
//     callback()
// }
// function test(){
//     console.log("test")
// }
// sample(test)



function sample(){
    console.log("sample")
    return function demo(){
        console.log("demo")
        return function test(){
            console.log("test")
        }
    }
}
// sample()()()
// var value = sample()
// let valueTwo = value()
// valueTwo();

// setTimeout(Callback,delay)

// setInterval(function() {
//     console.log("Hello, world!");
// }, 1000);

function demo(){
    console.log("demo")
}
console.log("sample");
function sample(){
    demo()
}
sample()


(function() {
    console.log("This is an IIFE.");
})
console.log("ddemo")
();
