// 4.1: Guess the Output And Explain ?

// console.log(Math.round(Math.random() * 10));
function mathexercise() {
  console.log(Math.round(Math.random() * 10));
}
mathexercise();

// 4.2: Create an object called country for a country of your choice, containing properties name , capital, language, population and neighbors

// Increase the country population by two million using dot notation.
// Decrease the country population by one million using bracket notation.
// Make language value in Uppercase.

country = {
  name: "Indian",
  capital: "Delhi",
  language: "Hindi",
  population: "1400000",
  neighbors: "pakistan",
};
country.population = 1400000 + 200000;
console.log("dot notation", country.population);
country["population"] = 1400000 + 200000;
console.log("bracket notation", country.population);
console.log(country.language.toUpperCase());

// 4.3: Guess the Output and explain Why?

let car = {
  color: "Blue",

  model: 2021,

  company: "Toyota",
};

let carColor = "Blue";

console.log(car[carColor]);
// the output is undefined as we can not access object property like this using bracket notation instead use this  car["carColor"]
console.log(car.carColor);
// this will also return as undefined as theres not property named carColor in object

// 4.4: Create a method describeCar inside car object in which you have to print like this in console using template literals
// Company of my car is ** . It color is And Model of my car is __**
// [From video lecture 4.3]
car = {
  color: "Blue",

  model: 2021,

  company: "Toyota",
  describeCar: function describeCarfunc() {
    return `Company of my car is ${this.company} . It's color is ${this.color} And Model of my car is ${this.model}`;
  },
};
console.log(car.describeCar());


// 4.5: Generate random numbers between 0 and 10 using trunc method of MATH object

// Example

// getRandomNumbers(){



// }

// Ouput  value  0-10
function getRandomNumber() {
    console.log(Math.trunc(Math.random() * 10) + 1);
  }
  
  getRandomNumber();


//   4.6: Guess the Output and Explain Why?

// [From video lecture 4.4]

let  arr  = [1,2,3,4];

arr.forEach(elem  =>{

if(elem  ==  1){

continue;

}

console.log(elem);

})
//   continue statement is  not valid in arrow function in foreach its designed for "for" loop

// 4.7: Guess the Output And explain Why?

// Important Note: if there is any error, How we can solve that error?

// [From video lecture 4.7]

let airplane = {
    flightName: 'fly india',
  
    atacode: 'FI',
  
    ratings: 4.9,
  
    book(passenger, flightNum) {
      console.log(
        `${passenger} Booked flight in ${this.flightName} with flight Number ${this.atacode}${flightNum}`
      );
    },
  };
  
  let bookMethod = airplane.book;
  let bookairplane=bookMethod.bind(airplane);
  
  bookairplane('john', 8754);



//   4.8: Guess the Output And Explain Why?

// [From video lecture 4.9]

let arr = [1, 2, 3, 4];

for (let elem in arr) {
  console.log(elem);
}
// prints 0,1,2,3


// 4.9: You have to create a Shopping_Cart array with following features :

// addItem(itemName) : this function should add string itemName to cart

// removeItem(itemName): this function should remove any item which matches itemName. Hint : search for index of itemName and then remove it

// cartSize() : returns size of cart in terms of number of cart Items.

let Shopping_Cart=["hoodie","shoes","bottle","coffee","diarymilk"];

function addItem(itemName){
    Shopping_Cart.push(itemName)
    return Shopping_Cart;
}
console.log(addItem("pencil"));



function removeItem(itemName){
  let removeItems = Shopping_Cart.indexOf(itemName);
  Shopping_Cart.splice(removeItems,1);
}
removeItem("shoes");
console.log(Shopping_Cart);



function cartSize(){
   
    return Shopping_Cart.length;
}
console.log(cartSize());
