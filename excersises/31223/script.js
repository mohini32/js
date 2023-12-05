// 6.1: Create regex for password with the following validations.

// Length of password at least of 8 characters

// contain at least one special character

// contain at least one alphabet (a-z) character

// [From video lecture 6.2]

// HTML

// <form action="" class="testForm">
//   <input
//     type="password"
//     name=""
//     class="inputPass"
//     placeholder="Enter Password"
//   />

//   <input type="submit" value="Check Password" />
// </form>
// JavaScript

// let form = document.querySelector('.testForm');

// let inputPassword = document.querySelector('.inputPass');

// let requiredPasswordPattern = 'create your regex here';

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   let password = inputPassword.value;

//   let result = requiredPasswordPattern.test(password);

//   if (result == true) {
//     console.log('Your password validated successfully');
//   } else {
//     console.log('try again with new password');
//   }
// });



let form = document.querySelector('.testForm');

let inputPassword = document.querySelector('.inputPass');

let requiredPasswordPattern = /^(?=.*[a-zA-Z])(?=.*^[a-zA-Z0-9]).{8,20}$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let password = inputPassword.value;

  let result = requiredPasswordPattern.test(password);

  if (result == true) {
    console.log('Your password validated successfully');
  } else {
    console.log('try again with new password');
  }
});


// 7.1: You have given array of strings. Your task is to obtain last two elements of given array using slice method?

// Input;

// let admins = ['john', 'paul', 'Neha', 'harry'];

// Ouput[('Neha', 'harry')];
let admins = ['john', 'paul', 'Neha', 'harry'];
console.log(admins.slice(-2));


// 7.2: You have given an array of 5 elements(1-5). Your task is defined as below.

// [From video lecture 7.2]

// const arr = [1, 4, 7, 6, 8];
// You have to delete 2 elements starting from index 2.

// You have to add 3 new elements on index 1 choice.
// Display the 2 deleted elements in console (from step 1)


const arr = [1, 4, 7, 6, 8];
let arr2=arr.splice(2,2);
 console.log(arr);
let arr1=arr.splice(1,0,12,13,14);
console.log(arr);

// 7.3: What happens if we use negative number inside slice method?

// const arr = [1, 4, 7, 6, 8];
// console.log(arr.slice(-2));
// it starts iterating from the end of the array here it will return 6,8


// 7.4: Write three different methods/approaches to get last element of the array?

// const arrdiff = [1, 4, 7, 6, 8];
const arrdiff = [1, 4, 7, 6, 8];
console.log(arrdiff.at(-1));
console.log(arrdiff.slice(-1)[0]);
console.log(arrdiff[arrdiff.length-1]);


// 7.5: You have given an array of nums. Create new Array with the help of nums array. In new Array each element will be a result of multiplication by 2 of the original array element

// const arr = [1, 4, 7, 6, 8];
const arrnums = [1, 4, 7, 6, 8];

let mapdef=arrnums.map(function (num){
   return num*2;
});

console.log(mapdef);



// 7.6 You have given an array of scores in which score of each student stored. Create a new array with the help of original scores array in which only those scores exist greater than 75%

// const arr = [10, 40, 70, 60, 80];
// [From video lecture 7.5]

// let totalScore = 150;

 let scores = [55, 76, 35, 77, 88, 97, 120, 136, 140];
let score=scores.filter(function(score){
    if(score>70)
        return score;
    
    
})
console.log("filter",score);



// 7.7: You have given an array of numbers nums. You have to find sum of all array elements using reduce method?

 let nums = [2, 3, 5, 7, 8, 4, 9];

 let num=nums.reduce(function(acc,currentvalue){
return acc+ currentvalue
 },0)
 console.log("reduce",num);



// 7.8: You have given an array of numbers nums. You have to find the index of value 8 using built-in method of array?

// let nums = [2, 3, 5, 6, 8, 6, 4, 8];

let numsbuiltindexmethod = [2, 3, 5, 6, 8, 6, 4, 8];
console.log(numsbuiltindexmethod.indexOf(8));


// 7.9: You have given an array of objects of users as below. Find the specified user with name = "John" 

// Also find the position (index+1) of that user inside the array?

let users = [
  {
    name: 'Paul',

    age: 24,

    verified: true,
  },

  {
    name: 'John',

    age: 21,

    verified: false,
  },

  {
    name: 'Neha',

    age: 19,

    verify: true,
  },
];

let user=users.findIndex(i=>{
    return i.name == "John" ;
})
console.log(user);



// 7.10: Guess the Output and explain Why?

let nums111 = [1, 2, 4, 5, [6, [8]], [9, 0]];

let res1 = nums111.flat(1);

let res2 = nums111.flatMap((elem) => elem);

console.log(res1, res2);
// because the default depth of flat method is 1



// 7.11: You have given an array of nums. Write a program to sort the elements of array in descending order using built-in method of array.

// Input;

// let nums = [5, 1, 4, 6, 8, 3, 9];

// Output[(9, 8, 6, 5, 4, 3, 1)];
let nums222 = [5, 1, 4, 6, 8, 3, 9];
let num2222=nums222.sort((a,b)=>{
return b-a;
})
console.log(nums222);



// 7.12: Guess the Output and Explain Why?

// [From video lecture 7.13]

// let arr = [1, 2, 3, 4];

// let result = arr.splice(1, 2).pop();

// console.log(result);


let arrOutput = [1, 2, 3, 4];
let result = arrOutput.splice(1, 2).pop();
console.log(result);



// 7.13: You have given an array of numbers nums You have to check if all elements of the array > 15 using built-in array method. return true or false

// [From video lecture 7.9]

// let nums = [16, 17, 18, 28, 22];
let nums333 = [16, 17, 18, 28, 22];

nums33=nums333.every(num=>{
    return num > 15;
})
console.log(nums33);










