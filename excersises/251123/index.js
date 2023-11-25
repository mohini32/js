// 3.1: Create a function Declaration called describeYourState Which take three parameters Population, traditional food and historical place. Based on this input function should return a String with this format.
// My state population is ** Its traditional food is ** and historical place name is ___
function describeYourState(Population,traditionalfood,historicalplace){
return `My state Population is ${Population}  Its traditional food is ${traditionalfood} and historical place name is ${historicalplace}`;
}
console.log(describeYourState("600mn","pooranpodi","marine drive"));


// 3.2: Create a function expression which does the exact same thing as defined in Question 1

let yourState=function(Population,traditionalfood,historicalplace){
    return `My state Population is ${Population}  Its traditional food is ${traditionalfood} and historical place name is ${historicalplace}`;
    }
    console.log(yourState("600mn","pooranpodi","gatewayof india"));

    // 3.3: Create function addition which takes two numbers as an argument And return the result of sum of two numbers
    function addition(num1=3, num2=5) {
        return num1 + num2;
      }
      console.log(addition());
      

    //   3.4: Identify which type of value passed below into the function greet(). What will be the return value of greet ?
   
   
    let person = {
        name: 'john',
      
        age: 25,
      };
      
      function greet(person) {
        person.name = `Mr ${person.name}`;
      console.log(typeof person);
        return `Welcome ${person.name}`;
      }
      
      greet(person);
    //   the return value of greet will be Welcome john

    // 3.5: Create higher order function named as transformer which take string and firstUpperCaseWord function as an arguments. firstUpperCaseWord is function which make first word UpperCase from a given String.
    function firstUpperCaseWord (name)
    {
    console.log("Hello " + name );
    }
    function transformer(firstUpperCaseWord,string)
    {
    return firstUpperCaseWord(string);
    }
   
  console.log(transformer(firstUpperCaseWord,"hii Mohini"));

//   3.6: create function which will display Your name after every 5 seconds

//   [From video lecture 3.8]
  
//   input
  
//   let  yourName  =  "john";
  
  
  
//   output
  
//   "john"  after  5  second
  
//   "john"  after  5  second
  
//   "john"  after  5  second
  
//   "john"  after  5  second
  
//   .
  
//   .
  
//   .
  
//   and  so  on.
// function testing (name="mohini"){
//     console.log(name) ;
// }

// let count = 0;

// let x=5;
// let interval= setInterval(testing,5000,"mohini");
// if(count === 5){
//     clearInterval(interval);
// }

let arrowFunction = (name = 'Coders') =>  {
    
 `Welcome ${name}`;
}
  console.log(arrowFunction('Programmers'));
//  without return statement dont use brace{}

// 3.8: Create a JavaScript Function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. : Area = Square root of√s(s - a)(s - b)(s - c) where s is half the perimeter, or (a + b + c)/2.

// input: area_of_triangle(5, 6, 7);

// output: 14.69;
// function s(a,b,c){
//     let result= a+b+c/2;
//     return result;
// }

function areaOfTriangle(a,b,c){
    let s=(a+b+c)/2;
   
     let ans=Math.sqrt (s*(s-a)*(s-b)*(s-c));
     return ans.toFixed(2);
     
}
console.log(areaOfTriangle(5,6,7))
  
// 3.9: Create a JavaScript Function to capitalize the first letter of each word of a given string.

// input: capitalize('we are the champions');

// output: 'We Are The Champions';

function capitalize(words){
    var separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
        separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
        separateWord[i].substring(1);
     }
     return separateWord.join(' ');
}
console.log(capitalize("my name is mohini"));
