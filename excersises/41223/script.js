// Question 1: Guess the Output And explain Why?

// let strArray = [1, 2, 3, 4, 5];

// let result = strArray.reverse();

// console.log(result == strArray);

let strArray = [1, 2, 3, 4, 5];

 let result = strArray.reverse();

 console.log(result == strArray);



//  Question 2: You have given two arrays below as an example. Your task is to combine them into one By using array method

//  input;
 
//  let arr1 = [1, 2, 3, 4, 5];
 
//  let arr2 = [6, 7, 8, 9, 10];
 
//  ouput[(6, 7, 8, 9, 10, 1, 2, 3, 4, 5)];

let arr1 = [1, 2, 3, 4, 5];
 
 let arr2 = [6, 7, 8, 9, 10];
 
//  ouput[(6, 7, 8, 9, 10, 1, 2, 3, 4, 5)];
let combinedarrr=arr1.concat(arr2);
console.log(combinedarrr);


// Question 3: You have given an array of letters below. Convert that array into string of letters Without Space

// input;

// let arr = ['a', 'b', 'h', 'i', 's', 'h', 'e', 'k'];

// output;

// ('abhishek');

let arr = ['a', 'b', 'h', 'i', 's', 'h', 'e', 'k'];
let name=arr.join('');
console.log(name);



// Question 4: Guess the Output and explain why?

// let arr = [11, 62, 1, 27, 8, 5];

// let sorted = arr.sort();

// console.log(sorted);

let arrsort = [11, 62, 1, 27, 8, 5];

let sorted = arrsort.sort();

console.log(sorted);
// its sorted array as  
// Question 5: Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following thing in order:

// Calculate the dog age in human years using the following formula: if the dogAge <= 2 years old, humanAge = 2 \* dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge
// Test  data



let  dogarr  = [12,2,5,12,8,13,9];


function calcAverageHumanAge(dogarr){
    let humanAge;
    dogarr.forEach(element => {
        if (element<=2){
             humanAge =2*element
         console.log(humanAge);
        }
        else{
            element>2;
            humanAge = 16 +element
            console.log(humanAge);
        }
    });
    // if(dogAge<=2){
    //     let humanage=2*
    // }

}
calcAverageHumanAge(dogarr);



// Question 6: Guess the Output and Explain Why?

let arrusingat = [1, 2, 3, 4, 5, 6, 7, 8];

let elem = arrusingat.at(-1);

console.log("finding element using at in array",elem);
// output is 8 as -1 starts counting from last element



// Question 7: Guess the Output and Explain why?

let arrsplice = [1, 2, 3, 4, 5, 6, 7, 8];

let resultsplice = arrsplice.slice(2, 5).splice(0, 2, 21).pop();

console.log(resultsplice, arrsplice);

