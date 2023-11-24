// 1.1: Create a code to check difference between null and undefined data type. Also check their type using typeof
function nullandundefined(){
    let firstname;
    let lastname=null;
   console.log(firstname);

   console.log("type of undefined firstname",typeof firstname);
   console.log(lastname);

   console.log("type of undefined lastname",typeof lastname);

}
nullandundefined();


// 1.2: Which type of variables (var, let or const) must be initialized at the time of declaration?
const name="Mohini";

// 1.3: Guess the Output and Explain Why?

// [From video lecture 1.5]
function lastIndexOf(){
let languages = 'java javaScript python cSharp';

let result = languages.lastIndexOf('S');

console.log("lastIndexOf",result);
}
lastIndexOf()
// answer will be 24


// 1.4: Guess the Output and Explain Why?

// [From video lecture 1.8]
function NAN(){
let variable = 'hello programmers';

let result = Number(variable);

 console.log("NAN" ,result);
}
NAN()
// answer is NAN as its not a number 


// 1.5: Guess the Output and Explain Why?

function assignmentchecker(){
    let num1 = 32;

let num2 = '32';

let result1 = num1 !== num2;

let result2 = num1 != num2;

console.log("this num1 !== num2 will check type as well as value" ,result1,"this num1 != num2 will check value only" , result2);
}
assignmentchecker()


// 1.6: Guess the Output and explain Why?

function strincludes(){
    let str = 'Hello Programmers';

let result = str.includes('r');

console.log("strincludes",result);
}
strincludes();

// 1.7: Guess the Output and Explain Why?
function multiply(){
    let num1 = 2;

    let num2 = 5;
    
    let result = num1 ** num2 * 2;
    
    console.log("multiply",result);
}
multiply();
// because Exponentiation has highest level of precedence

// 1.8: Guess the Output and Explain Why?
function concat(){
    let num1 = [1, 2, 4, 5];

    let num2 = [6, 5, 8, 0];
    
    let result = num1.concat(num2);
    
    console.log("concat",result);
}
concat();
// concats both the arrays and makes a new array doesn't change the existing array

// 1.9: Guess the Output and Explain Why?
function greaterthen(){
    let a = 5;

    let b = 7;
    
    let c = 8;
    
    let result = a < b > c;
    
    console.log("greaterthen arthimetic operation",result);
}
greaterthen();

// answer is false because b is not greater than c


// 1.10: If your State is split into four equal parts such that in each part there are 1/4 number of people live. You have to find how many people would live in each part? which operators will you use ?

function oneFourth(){
    let num=500;
   let  result=num/4;
   console.log("split into four equal parts such that in each part",result);
}
oneFourth();

// Chapter 2 (Control Flow / Conditional)

// 2.1: Guess the Output And Explain Why?
function Conditional(){
    let i = 4;

for (let j = 0; i < 10; i++) {
  if (j === 1 || i === 6) {

    let name ="sdfsdf"
    continue;
  } else {
    console.log(i, j);

    if (i === 7) {
      break;
    }
  }
}
}
Conditional();
// this will skip console logging when i is 1 or j is 6 and continue after that also it will stop 


// 2.2: Guess the Output and Explain Why?

function forloop(){
    let i = 0;

for (i; i < 5; i++) {
  console.log(i);
}
}
forloop();

// 2.3: Write a simple Program in which You have to print first 10 numbers in descending order (10...1)?
function descending(){
    let i = 10;

for (i; i > 0; i--) {
  console.log(i);
}
}
descending();

// 2.4: Lets say John is looking a new country to live in. He want to live in a country that speaks English, has less than 10 million people. One of the food option between these two must present Spanish food OR English food
// Write an if/else if statement to help john figure out Your country is right for him?

function nestedcondition(){
    let language="hindi";
let food="Spanish";
population=50000;
    if (language="English"){
if(food="spanish"||"english"){
if(population<100000){
    console.log("john can live here");
}
}
    }
    else{
        console.log("john can not live here");
    }
}
nestedcondition();

// 2.5: Guess the Output And Explain Why?

function forloop(){
    for (let i = 0; i < 10; i++) {
        console.log(i);
      }
      
      console.log(i);
}
forloop();
// index.js:198 Uncaught ReferenceError: i is not defined
//     at forloop (index.js:198:19)
//     at index.js:159:1
// gives error as it gets destroyed after the forloop has executed from the memory

// 2.6: use nested-if statement to check your age>18
function ternary(age,height){
return result=age>18 ? height > 5.10 ? "I can sit in exam":"I cant sit in exam":"no";

}
console.log(ternary(12,8.90));

function ternary2(grade,passingYear){
    return result=grade=="A" ? passingYear < 2020 ? "Qualify":"Fail":"Fail";
    
    }
    console.log(ternary2(B,2020));
