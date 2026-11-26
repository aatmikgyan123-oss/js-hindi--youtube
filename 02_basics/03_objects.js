// singleton
// object.create

// object literals
const mySym = Symbol("Key1")

const Jsuser = {
    name:"Aatmik",
    [mySym]:"myKey1",
    "full name":"Aatmik Gyan",
    age:14,
    location:"Jaipur",
    email:"aatmik@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monaday","Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "Aatmik@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email = "Aatmik@microsoft.com"

// console.log(Jsuser);

Jsuser.greetings = function(){
    console.log("hello JS users");
    
}

Jsuser.greetingsTwo = function(){
    console.log(`hello JS users, ${this.name}`);
    
}
console.log(Jsuser.greetings());
console.log(Jsuser.greetingsTwo());
