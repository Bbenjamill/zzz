
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Goodnews Okon',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};



const account2 = {
  owner: 'UyaiAbasi Etuk',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};


const account3 = {
  owner: 'Ediomo Ekpenyong',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Mitchel Edah',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// To begin with the functionality we start by editing the movements, we want to display the influx of funds into the account, I want to be able to dispay the all the movement in the account
// We create a function when there's need for reusablitity. e.g below
// const displayAccount = function (acc){
//  console.log(acc);
// }
// displayAccount(accounts)
// console.log(typeof accounts); 
// First we create a function for the movements so we can always always call for the diff accounts. We create the function and for the function , we put 2 parameters (mov, i), the mov tells that for each of the value of the movement, that html should be generated.
const displayMovements = function(movements) {
 // for each of the value of movement, this should be done, hence the for each operation. mind u, we can't call a for each func for an object, it can only be called for an array
 // We also set that the movements container should be empty before each uploading is done. But this is placed before the function cause JS is single threaded and before the function is ran, the clock has to be empty so the new data can start out
 containerMovements.textContent = ""
 movements.forEach((mov, i) => {
  // firstly, for each of the value an html should be created and inserted
  // we also have to set the conditions for which the type and how the deposit is set and arrainged in the html using ternary operators ? and : And we set that the value of "deposit or withdrawal" should be given in respect to if the value in the movements array is greater than 0.
  
  
  const type = mov > 0 ? "deposit" : "withdrawal"
  const html = `<div class="movements">
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>`
  containerMovements.insertAdjacentHTML("afterbegin", html)
 
 
 
 
 })
}
displayMovements(account1.movements)

// After displaying the movement, the next step is to display the balance of the account and this is started by creating the function that would handle that.
const displayBalance = function(movements) {
 // We create a constant to which we'll perform the function and give the textcontent the value of our constant.
 const balance = movements.reduce((acc, cur) => acc + cur, 0)
 // return balance- tried this out to check the functionality of the function
 labelBalance.textContent = `$${balance}`
 return balance
 
}
displayBalance(account1.movements)

// We move to the IN which has a class of summary_value--in
// We do this by stating a function that calls to the class 
const displayIncome = function(movements) {
 const income = movements.filter((mov)=> mov > 0).reduce((acc, crr) => acc + crr, 0)
 // return income
 labelSumIn.textContent = `$${income}`
}

displayIncome(account1.movements);

// To determine the OUT, we repeat the same process as we did for the IN

const displayOutcome = function(movements) {
 const outcome = Math.abs(movements.filter((mov)=> mov < 0).reduce((acc, cur) => acc + cur, 0))
 // return outcome
 labelSumOut.textContent = `$${outcome}`
}
displayOutcome(account1.movements)

// Interest
// To set the interest in the first place we start  by creating a function that sets the interest to a value. We set this first to be relative to the particular account prior to the log in setup
const displayInterest = function(movements){
  const interest = account1.movements.filter((mov)=> mov > 0).map((mov)=> mov * (account1.interestRate/100)).filter((mov)=> mov >= 1).reduce((acc, cur)=> acc + cur, 0)

  labelSumInterest.textContent = `$${interest}`

  // console.log(interest);
}
displayInterest(account1.movements)

// I'm trying to create a functional Interest that deals with all accounts, we set that the function displayinterest has a function that takes the array of accounts into consideration, and this is used to pinpoint and select the movement of the said account
// ***** I'll use what's below for the functionality of the webpage
// const displayInterest = function(accounts){
//  const interest = accounts.movements.filter((mov) => mov > 0)
//  console.log(interest);
// }
// displayInterest(account2)
// const displayInterest = function(movements) {
//  const interest = movements.filter((mov) => mov > 0).map((mov) => mov * Number((accounts.interestRate/100))
//  return interest
// }
// console.log(displayInterest(account1.movements));



// Creation of USername-Creating a username and pass that'll be used to login the bankist.

// To create a dynmaic username, we need the first letter in the "owner"
// I used string methods to get the values of this


const createUsername = function(acs) {
 acs.forEach((a) => {
  a.username = a.owner.toLowerCase().split(" ").map((gvtN) => gvtN[0]).join("")

  console.log(a.username);
 })
}
createUsername(accounts)



// console.log(accounts);
// console.log(accounts[0].owner);

// Implementing Login 
// We've set opacity to 0 so when the login details is correct it brings up the page
let currentAccount;
// we create currentAccount so as to  put the login details to be equated to it

btnLogin.addEventListener("click", function(e){
 // We also had the preventDefault setting which prevents the form from sending the info to the backend
 console.log("Login");
 console.log(e);
})
