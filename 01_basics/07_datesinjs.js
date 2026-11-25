// date 

let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// console.log(typeof mydate);

// let myCreateDate = new Date(2030 , 0 , 23)
// let myCreateDate = new Date(2030 , 0 , 23, 6,7)
 let myCreateDate = new Date("2023-01-14")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log( myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth());
 console.log(newdate.getDay());



 console.log(newdate.toLocaleString('default',{
    weekday: "long"
 }));
 