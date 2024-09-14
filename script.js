// Part 1 Math Problems

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

const isSum50 = (n1 + n2 + n3 + n4) == 50;
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// Check if all numbers are divisible by 5. Cache the result in a variable.
   const remainder1 = n1 % 5
    console.log(remainder1);

    const remainder2 = n2 % 5
    console.log(remainder2);

    const remainder3 = n3 % 5
    console.log(remainder3);

    const remainder4 = n4 % 5
    console.log(remainder4);
 

// Check if the first number is larger than the last. Cache the result in a variable.

const myNumber = n1 > n4
console.log(myNumber);
// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.

const difference = n2 - n1
console.log(difference);

// Multiply the result by the third number.

const product = difference * n3
console.log(product)

// Find the remainder of dividing the result by the fourth number.

const myRemainder = product % 5
console.log(myRemainder);
// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
// Im not sure that I understand this question//

// Part 2 Practical Math

//Trip Variables
const totalMiles = 1500;

let mpg;
let mph = 75;

if (mph >= 75) {
  mpg = 23;
} else if (mph >= 60) {
  mpg = 28;
} else {
  mpg = 30;
}

const budget = 175;

const pricePerGallon = 3;

// How many gallons of fuel will you need for the entire trip?
const gallonsNeeded = totalMiles / mpg;

console.log(gallonsNeeded);

// Will your budget be enough to cover the fuel expense?
const willBudgetCover = budget > gallonsNeeded * pricePerGallon;

console.log(
  'Price of total gas needed: ',
  gallonsNeeded * pricePerGallon,
  'dollars'
);
console.log('does budget cover gas expense? ', willBudgetCover);

// How long will the trip take, in hours?
const tripHours = totalMiles / mph;

console.log('how long will this take?? ' + tripHours.toFixed() + ' hours');

// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?

// mph - 55
// 50 gallons needed
// Price of total gas needed:  150 dollars
// does budget cover gas expense?  true
// how long will this take?? 27.27 hours

// mph - 60
// 53.57142857142857 gallons needed
// Price of total gas needed:  160.71428571428572 dollars
// does budget cover gas expense?  true
// how long will this take?? 25 hours

// mph - 75
// 65.21739130434783 gallons needed
// Price of total gas needed:  195.6521739130435 dollars
// does budget cover gas expense?  false
// how long will this take?? 20 hours