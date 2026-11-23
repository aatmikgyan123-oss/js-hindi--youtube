const name = "Aatmik"
const repoCount = 50

// console.log(name + repoCount + " Value");
// console.log(`My name is ${name} and my repo count is ${repoCount}`);// string interpretion

const gameName = new String('Aatmik-Emperor-Smart')

console.log(gameName.length);
console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));


const Newstring = gameName.substring(0 , 4)

console.log( Newstring );

const anotherString =  gameName.slice(0, 4)
console.log(anotherString);

const NewstringOne = "  Aatmik  "
console.log(NewstringOne);
console.log(NewstringOne.trim());

const url = "https:/Aatmik.com/Aatmik%20Gyan"
console.log(url.replace("%20", "-"));
console.log(url.includes("sundar"));

console.log(gameName.split("-"));



