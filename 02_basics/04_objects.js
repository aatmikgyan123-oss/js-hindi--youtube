// const Tinderuser = new Object () // singeton object
const Tinderuser = {} // non singleton object

Tinderuser.id = "123abc"
Tinderuser.name = "Aatmik"
Tinderuser.isLoggedIn = false 
// console.log(Tinderuser);


const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname:{
            first_name: "Aatmik",
            last_name:"Gyan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.first_name);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1 , obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const user = [
    {
        email:"abc@google.com",
        name:"Aatmik",
    },
    {
        email:"abc@google.com",
        name:"Aatmik"
    },
    {
        email:"abc@google.com",
        name:"Aatmik"
    }
]

user[1].email
// console.log(Tinderuser);
// console.log(Object.keys(Tinderuser));
// console.log(Object.values(Tinderuser));
// console.log(Object.entries(Tinderuser));

// console.log(Tinderuser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "Js in hindi ",
    course_Price: "999",
    course_Teacher:"Aatmik"
}

// course.course_Teacher

const {course_Teacher: Teacher} = course

console.log(Teacher);
