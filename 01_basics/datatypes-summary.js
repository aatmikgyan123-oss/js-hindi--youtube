// Primitive data types

// 7 types : string , number , boolean , null , undefined , Symbol , bigInt


// Reference (Non-Primitive)

// Arrays , Functions , Objects

const score = false

const Id = Symbol('123')
console.log(Id);

const anotherId = Symbol('123')
console.log(anotherId)

console.log(Id === anotherId)


const bigNumber = 26566878787447n

// reference examples

let a = {"Captain-America", "Iron Man", "Loki", "Thor"}  // array
let b = {
    name : "Aatmik"
    age : 14
} // object

let c = function(){
    console.log("Hello Worls");
    
} // functions