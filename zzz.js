// alert("hello world")

//  
// console.log(a);
 // a = 7, ("= serve as the assignment operator") 
//  let b = 2
//  let c = a+b 
//  console.log(c);
// console.log("hello xanny");

// const z = 8

// console.log(z);
// var y = 12
// y = 30
// console.log(y);
// let a = "ben" 
// console.log(a);

// Naming convention: camelCasing

// const firstName = "James"
// const firstname = "Stephen"
// console.log (typeof ["firstname"]);
// console.log(firstName);
// console.log(firstname);
// mathematical operations
// let u = y**a
// console.log(u);

// Comparism Operators (<, >,. <=, >=)
// let a = 7
// let b = 6
// let c = a>=b 
// console.log(c);

// Logical Operators (|| , &&)
// The "or & and " operators are used as logical operators for logial statment.
   // Conditional statement (if, else, else if). The functions are used in conditional statements and they go hand in hand with the logical operator. The else statement directly looks to the if statement directly above it. The "else if" allows for several conditions and doesn't just look up the first if.
   // let a = 10
   // let b = 30
   // let c = 30
   // let d = 28

   // if (a > b && c < d && c > a) {
   //  console.log("This is true");
   // }
   // else (console.log("This is false"))

   // if (d>b && b!==c) {
   //  console.log("This is true");
   // }
   // else (console.log("False!!"))
//  Equality Operator (==, ===, !==) "==" is the lose equality sign, as long any the condtion is met doesn't matter the type of data, it would be met."===" while this is the strict equality and every part of the condition must be met, The "!==" stands for is not equal to.
// const favProgLang = prompt ("What is your favorite programming Language")
// if (favProgLang == "Javascript") {
//  console.log("Wow, that's wonderful")
// }
// if (favProgLang == "Python") {console.log("You are a star")
// }
// if (favProgLang == "Mundo") {console.log("You're the best") 
// }
// else (console.log("Boring human 😥"))
// if (favProgLang == "Javascript") {
//  console.log("Wow, that's wonderful")
// }
// else if (favProgLang == "Python") {console.log("You are a star")
// }
// else if (favProgLang == "Mundo") {console.log("You're the best") 
// }
// else (console.log("Boring human 😥"))
// const favFood = prompt("What's your favorite food?")
// if (favFood === "Eba") {
//  console.log("You're a gem");
// }
// else (console.log("Shit"))

// const herAge = prompt("What's her age?")
// if ( herAge === "18") {console.log("You guessed right")}
// else {console.log("You're such a terrible guesser")}

// let a = 18
// if (a === "18") {console.log("yippe")}
// else {console.log("Shit")}

// Data type: Primitive: These are data types that cannot be mutated;cannot be changed. They are: Strings-"Words", Numbers, Boolean-"True and false", Bigint, Null, Undefined, Symbol
// let a = "Okon"
// console.log(typeof a);
// let b = 15
// console.log(typeof b);
// let myFav
// console.log(myFav);
// console.log(typeof c);
// console.log(typeof true);

// let firstName = "Stephen"
// let surName = "Ben"
// console.log(firstName +" "+ surName);
//  Data type Conversion and Coersion: JS has the ability to forcefully coerce the data type so mathematicak operations can be carried out

// let a = 55
// a = String(55)
// console.log(typeof a);

// let firstName = Number ("Okon")
// console.log(typeof firstName)

// let a = "2"
// let b = "2"
// console.log(a + b);
// console.log(typeof a);
// console.log(typeof b);
// console.log(a-b);
// console.log(a + b - 4);
// console.log("2" + "2" - 20);

// NON- Primitive data types: Arrays and Objects
// Arrays: Arrays are contained in the "[]"
// const myEmployeesAge = [34, 50, 50, 70, 56, 32, ["peter", "tayo", "olu", ["true", "false"], "dayo"], 36, 68, 86]
// console.log(myEmployeesAge);
// console.log(myEmployeesAge.length);
// console.log(myEmployeesAge[0])
// console.log(myEmployeesAge[6]);
// console.log(myEmployeesAge[myEmployeesAge.length-4][3][1]);
// console.log(myEmployeesAge[6][2]);

// Mutating arrays: Adding methods (Push, unshift): Push puts new elements to the end of an array and tells the new length of the array while unshift puts new element at the beginning of the array
// const favFruit = ["orange", "apple", "banana", "carrot"]
// console.log(favFruit);
// favFruit.push ("Pawpaw")
// console.log(favFruit);
// favFruit.push ("coconut")
// console.log(favFruit);
// favFruit.unshift ("Pear")
// console.log(favFruit);

// Removing method (Pop, Shift): Pop removes the last element in the array and returns the length, while shift removes the first element of the array
// favFruit.pop()
// console.log(typeof favFruit);
// console.log(favFruit);
// favFruit.shift()
// console.log(favFruit);

// SPLICE METHOD: Removing Method, This used to delete elements in an array. (x,y); "x" stands for the position the removal would start and "y" the number of items to be deleted from that positon "x"
// favFruit.splice(2,1)
// console.log(favFruit);
// Adding Method This is used to add new elements to the array after removing the other, (x, y, "z"). "Z" is the new element to be added, it takes the position of the removed element
// favFruit.splice (0, 2, "mango", "onions", "pine")
// console.log(favFruit);

//  Using Template literal: The "``" is used to imitialized the template literal. The ${variable} is used so the value of the variable can be used.
// const name = "Rosalla"
// console.log( `My name is ${name}`);

// OBJECT ( For objects, we use the object dot selector "." This is used to call out the objects)
// const benStephenData = {
//    firstName: "Stephen",
//    lastName: "Ben",
//    dateOfBirth: 2000,
//    myAge: 23,
// }
// console.log(benStephenData.dateOfBirth);

// LOOPS- There are two kinds of loops: The "For" and "while". They are used for different scenarios
// For Loops: This loop is used when we know the time the condition would be met, It has 3 argument.
// for(let i = 1; i<= 20; i++){
// console.log(`you have lifted ${i} reps 🏋️‍♂️🏋️‍♂️`);
// console.log(i); 
// } 
// for (i=1 ; i<=10; i++) {
//    console.log(`you have lifted ${i} reps 🏋️‍♂️`);
//    console.log(i);
// }
// Looping through an array
// const dateOfBirth = [1978, 1990, 1992, 1988, 2001, 1993, 1985, 2003, 2005, 1983, 1960]
// for (let i = 0; i<dateOfBirth.length; i++) {
//    console.log(dateOfBirth[i]);
// }
// Looping backwards 
// for (i = dateOfBirth.length - 1; i>0; i--) {
//    console.log(dateOfBirth[i]);

// While loop: For while loop, only one argument is required. The while loop is used when the time of the condition would be met. While loop can a,so perform the fnc done by for loop but fr loop cannot cannot be used in place of while loop
// let rep = 1;

// while(rep<=10) {
//    console.log(`You have lifted ${rep} reps 🏋️‍♂️`);

//    rep++
// }
// let dice = Math.floor(Math.random() *6) +1
// while (dice !== 6){
//    console.log(`You rolled a ${dice} so you lose`)
//       dice = Math.floor(Math.random() *6) +1
//       if (dice == 6) {
//          console.log(`You rolled a ${dice} so you win`);
//       } 
// }

// Functions 
// Function Declaration This are operations that are declared and the operator tells JS what to do. This kind of functions can be hoisted
// function Benny() {
// console.log("This is Ben's space");
// console.log(8-4);
// }
// Benny()
// For every Function declaration, the parameters must be set as this makes the function dynamic.

// function Foodmaker(onions, pepper) {
//    console.log(`I made the food with ${onions} onions and ${pepper} pepper`);
   
// }
//  Foodmaker(5, 6)

//  function juiceMaker(orange, apple){
  //   console.log(orange, apple);
//    const juice = `I made this juice using ${orange} oranges and ${apple} apples`
//    return juice;
// }
// juiceMaker(5, 2)
// console.log(juice);
// console.log(juiceMaker(10, 12));

// function Ricemaker() {
//    console.log(`I love rice`);
// }
// function Ricemaker(salt, maggi) {
//    console.log(`I made rice with ${salt} salt and ${maggi} maggi`);
// }
// Ricemaker(5, 7)
// function Ricemaker(salt, maggi) {
//    const Rice = `I made rice with ${salt} salt and ${maggi} maggi`
//    return Rice;
   
// }
// console.log(Ricemaker(4, 6));

// function ageDeclarator(currentYear , dateOfBirth) {
//    const yourAge = `I am ${currentYear - dateOfBirth} years old`
//    return yourAge
// };
// console.log(ageDeclarator (2023, 2000)); 
// Function Expression This can of function are written with the const first before the function. This kind of function cannot be hoisted
// const Bernard = function() {
//    console.log("I am him");
// } 
// Bernard ()
// const Ricemaker = function(salt, maggi) {
//    const Rice = `I made rice with ${salt} salt and ${maggi} maggi`
//    return Rice
// }
// console.log(Ricemaker(5, 6)); 






// function Foodmaker(onions, pepper){
//    console.log(onions, pepper);
//    const food = `I made this food with ${onions} onions and ${pepper} pepper🥳`
   
// }
// Foodmaker(12,23)
// console.log(food);
// const dateOfBirth = [1978, 1990, 1992, 1988, 2001, 1993, 1985, 2003, 1973, 1994, 2003, 2005, 1983, 1960]

// for(i = 0; i<dateOfBirth.length; i++){
//     console.log(dateOfBirth[i]);
// }




// const currentYear = 2023
// // let ages = [];
// for (let ben = 0; ben < dateOfBirth.length; ben++) {
//  const yourAge = currentYear - dateOfBirth[ben]
//  ages.push(yourAge) 
// }

// console.log(ages);
// const dateOfBirthMySiblings = [1996, 1994, 2000]
// const currentYear = 2023
//  const firstAge = currentYear - dateOfBirthMySiblings[0]
//  console.log(firstAge); 

//  for (i = 0; i<dateOfBirthMySiblings.length; i++) {
//   const thierAges = currentYear - dateOfBirthMySiblings[i]
//   console.log(thierAges);
//  }
//  let ourAges = []
//  for (let i = 0; i < dateOfBirthMySiblings.length; i++) {
//   const Age = currentYear - dateOfBirthMySiblings[i];
//   ourAges.push(Age)
//  }
//  console.log(ourAges);

// const oddNumbers = [1, 3, 5, 7, 9]
// let evenNumber = []

// for (let i = 0; i<oddNumbers.length; i++) {
//  const newNumber = 1 + oddNumbers[i];
//  evenNumber.push(newNumber)
 
// }
// console.log(evenNumber);

// const ageCalculator = function (currentYear, dateOfBirth) {
// const yourAge = `You are ${currentYear - dateOfBirth} years old`
// return yourAge
// }
// console.log(ageCalculator(2023, 1989));

// Create a function with two arguments (name, distance (m/s)) any time a function is called it gives a name and convert the m/s to km/hr taking to note that 1000m/60s = 1km/hr
// const speedCalculator = function(identity, distance) {
//    const iTravel = `${identity} travelled at ${distance * 1000/60 }km/hr`
//    return iTravel
// }
// console.log(speedCalculator("Ben",  100));
// // Arrow function
// const juiceProcessor = (orange, apple) => {
//    const juice = `I made this juice using ${orange} oranges and ${apple} apples`
//    return juice;
// }
// console.log(juiceProcessor(4, 7));


// JS for Game display
// Step 1, creating the input vale and setting the check button
// const check = document.querySelector(".check");
// const again = document.querySelector(".again");
// let randomNumber = Math.trunc(Math.random()*20 + 1);
// //    document.querySelector(".number").textContent = randomNumber


// let score = 20;
// // Setting the highscore to the JS memory so it can recognize and start the highscore when the score is resetted.
// let highscore = 0;





// check.addEventListener("click", function(){
//    let guess = Number (document.querySelector(".guess").value);
//    // The  values of the input box affects the direction of the game
//    if (!guess) {
//       document.querySelector(".message").textContent = "Please insert a number";
//    }
//    else if (guess == randomNumber) {
//       document.querySelector(".message").textContent = "Congratulations";
//       document.querySelector("body").style.backgroundColor = "blue";
//       document.querySelector(".number").style.width = "30rem"
//       if (score > highscore) {
//          highscore = score;
//          document.querySelector(".highscore").textContent = score
//       }
//    }

//    // For guess !== randomNumber we have two different scenarios;
//    else if (guess < randomNumber) {
//       document.querySelector(".message").textContent = "Guess too low 📉";
//       // Setting the score to affect the movement of to determine if the game has been won or lost
//       score --;
//       document.querySelector(".score").textContent = score;
//       if (score < 1) {
//          document.querySelector(".score").textContent = 0;
//          document.querySelector(".message"). textContent = "Game over 😥";
//          document.querySelector("body").style.backgroundColor = "red";
//       }
//    }

//    else if (guess > randomNumber) {
//       document.querySelector(".message").textContent = "Guess too high 📈"
//       score --;
//       document.querySelector(".score").textContent = score;
//    if (score < 1) {
//       document.querySelector(".score").textContent = 0;
//       document.querySelector (".message").textContent = "Game over 😥";
//       document.querySelector("body").style.backgroundColor = "red";
//    }
//    }
// })

// again.addEventListener("click", function(){
//    randomNumber = Math.trunc(Math.random()*20 + 1);
//    // document.querySelector(".number").textContent = randomNumber;
//    score = 20; 
//    document.querySelector(".score").textContent = score;
//    document.querySelector(".message").textContent = "Start guessing..."
//    document.querySelector(".guess").value = ""
//    document.querySelector("body").style.backgroundColor = "#222"
//    document.querySelector(".number").style.width = "15rem"

//    // 
// })

// Advanced array method
// Slice This is used to slice, remove some elements in an array and leave the rest in it.
// const ages = [45, 65, 50, 47, 60, 80, 33, 69, 70, 38]

// const slicedAges = ages.slice()
// console.log(slicedAges);

// const splicedAges = ages.splice()
// console.log(splicedAges);

// Fill THis function allows you to replace the elements in an array.
// const filledAges = ages.fill("b", 0, 7)
// console.log(filledAges);
// Spread(...) This is used to put an already created array into a new array

// const newAges = [34, 56,45, 67, ...ages]

// console.log(newAges);

// Reverse This starts the array from the end, It presents the array backward
// const alpha = ["a", "c", "z", "r"]
// // console.log(alpha);
// const reversedArr = [...alpha]
// console.log(reversedArr);
// const myNewArr = reversedArr.reverse()
// console.log(myNewArr);
// console.log(alpha);

// Join This adds an element to the strings in the array
// const samNewArr = alpha.join("*")
// console.log(samNewArr);

// const ages = [45, 65, 50, 47, 60, 80, 33, 69, 70, 38]

// For of loop This is used to loop thru an array and it allows only one argumnet. It is used for "For of" conditions.
// for (age of ages) { 
//    if (age > 60) {console.log(`${age} is a big age`);}
//    else {console.log(`${age} is a small age`);}
// }

// For each loops In this situation, 3 arguments are sent, It is used for "for each scenarios"
// ages.forEach(function(age){console.log(age*2);})

// *const forNewAge = ages.forEach(function(age) { age * 2
   
// })
// console.log(forNewAge);*

// MAP METHOD This function calls the callback fn of an element and returns an array that contains the result
// ages.map((age)=>console.log(age*4))
// const myNewArr = ages.map((age)=>{return age * 8})
// console.log(myNewArr);

// const myOldArr = ages.map((age)=> {return age /2})
// console.log(myOldArr);

// Filter This is used to filter the elements in an array according to the set conditions
// const filteredAge = ages.filter((age)=>{return age < 60})
// console.log(filteredAge);

// const declrAge = ages.filter(function(age) {return age > 60})
// console.log(declrAge);

// Reduce This is used for the summation of the elemenats in an array
// const reducedAge = ages.reduce(function(acc, cur)
// {console.log(`${acc}`)
// return acc + cur
// }, 0);
// console.log(reducedAge);

// const incrsAge = ages.reduce(function(acc, cur)
// {console.log(`${acc}`)
// return acc + cur 
// }, 0)
// console.log(incrsAge);

// Creating Elements with Javascript (Append, Prepend, Before, After) Append puts the new element just after the last element in the div while Prepend puts the element just before the first element in the div. Before puts the new element just before the div and its content
// To insert positions for "insertAdjacentHTML", we've got 4 options; afterend, afterbegin, beforeend and beforebegin. Afterbegin inserts the adjacenthtml in the div but just before the first element while afterend insert the html outside the div, after the last element. Beforeend attaches it in the div but just after the last element while beforebegin attaches it as the first things just before the div

// const greet = document.querySelector(".greeter")
// const textAdder = document.querySelector(".btn")

// const newElement = document.createElement("h2")
// newElement.classList.add("message")
// newElement.innerHTML = "Hello Universe <button class='btn'>Click here</button> ";

// const html = `<section class="left">
//       <input type="number" class="guess" />
//       <button class="btn check">Check!</button>
//       </section>`

// textAdder.addEventListener("click", function(){
//    greet.insertAdjacentHTML("beforebegin", html)
// })

// greet.append(newElement)

// Setting the Dark and Light mode of a webpage
const changeBackground = document.querySelector(".change-background")

const body = document.querySelector("body")


changeBackground.addEventListener("click", function (){body.classList.toggle("change")})
// body.addEventListener("keydown", function(each){
//    console.log(each.key);
// })
// The keypress event listener, this is used to listen for keyboard activity, the event can be listened for and a call back function can be called to perform the necessary requirements. they are two keybaord events: The keydown and keyup
// Chaining of methods: This is a situation when multiple function are added to a single operation, e.g account1.movement.filter((mov)=> mov > 0).map ((mov)=>mov * 2), etc, for illustration, check below
// console.log(account1.movements.filter((mov)=> mov > 0).map((mov)=> mov * 2).reduce((acc, cur) => acc + cur, 0));

// Optional chaining, in the situation, js looks thru and gives an undefined feedback
// console.log(account1.interestRate);
// console.log(account1?.interestRate);
// console.log(account1.interest);
// console.log(account2?.movement);