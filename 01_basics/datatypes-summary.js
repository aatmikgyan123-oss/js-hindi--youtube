// Primitive data types

// 7 types : string , number , boolean , null , undefined , Symbol , bigInt


// Reference (Non-Primitive)

// Arrays , Functions , Objects

const score = false

const Id = Symbol('123')
// console.log(Id);

const anotherId = Symbol('123')
// console.log(anotherId)

// console.log(Id === anotherId)


const bigNumber = 26566878787447n

// reference examples

// const a = {"Captain-America",  "Iron Man" ,  "Loki", "Thor"} ; 
var b = {
    name : "Aatmik",
    age:14,
} 

let c = function(){
    console.log("Hello World");
    
} // functions

// console.log(typeof  b );

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//   stack Memory (Primitive Data type), Heap Memory(Reference)      

let myName = "Aatmik"

let anotherName = myName
anotherName = "King"
console.log(anotherName)
console.log(myName);


let userOne = {
    email: "user@google.com",
    upi:"user@lby"
}

let userTwo = userOne

userTwo.email = "aatmik@google.com"
console.log(userTwo.email);
console.log(userOne.email);
