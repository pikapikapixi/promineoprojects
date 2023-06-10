/*
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  Variables and Operations Lab
  FE 01 Lab  
*/

/** Key Terms:
 *  JavaScript
 *  GUI (Graphic User Interface)
 *  CLI (Command Line Interface)
 *  Variable
 *  Data Types:
 *   - String
 *   - Number
 *   - Boolean
 *   - Array
 *   - Undefined
 *   - Object
 *   - BigInt
 *   - Null
 *   - Symbol
 *  Method
 *  Git
 *  Source Control
 *  Operators
 *  console.log()
 * 
*/

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so. 
// Read the comments and add your code where it is specified for each question. 
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 1. Creating & 'console.log()'ing variables \n`);

/**
 * Instruction: Create a variable for each step, then print that variable 
 *              to the console in the correct section.
 *
 * Step 1: Create a variable to hold the quantity of available seats left on a flight.
 * Step 2: Create a variable to hold the cost of groceries at checkout
 * Step 3: Create a variable to hold a person's middle initial
 * Step 4: Is it Hot Outside?
 *         Create a variable to hold a boolean, true if it's hot outside, false if it's not hot outside.
 * Step 5: Create a variable to hold a customer's first name.
 * Step 6: Create a variable to hold a street address.
 * ↓ YOUR CODE HERE ↓ */

console.log("Step 1:  Number of Seats on a Plane");
var seatsLeftOnPlane = 12;
console.log("The number of seats left on this plane are " + seatsLeftOnPlane)

console.log("Step 2:  Cost of Groceries");
var costofGroceries = 342
console.log("The cost of groceries this month was " + costofGroceries)

console.log("Step 3:  Middle Initial");
var myMiddleInitial = "M"
console.log("My middle initial in this life is " + myMiddleInitial)

console.log("Step 4:  Is it Hot Outside?");
var howHotIsItOutsideToday = "False"
console.log("Is is hot out today? " + howHotIsItOutsideToday)

console.log("Step 5:  First Name");
var firstName = "Lucy" 
console.log("What is a random first name? " + firstName)

console.log("Step 6:  Street Address");
var streetAddress = "123 Frog Foot St."
console.log("What is a nonsense street address? " + streetAddress)



/*-------------------------------------------------------*/

console.log(`--------------------------
Question 2. Creating & 'console.log()'ing variables \n`);
 

/** 
 * Instruction: Use the variables we just created to solve the problems below.
 *              Print your answers to the console.
 * 
 *
 * */

    console.log('Remove Plane Seats:')
//	A customer booked 2 plane seats. Remove 2 seats from the available seats variable
//  ↓ YOUR CODE HERE ↓
console.log("A customer booked 2 seats... There are only " + (seatsLeftOnPlane - 2) + " seats left.")

    console.log('Buy a Candy Bar:')
//	Impulse candy bar purchase! Add 2.15 to the grocery total
//  ↓ YOUR CODE HERE ↓
console.log("I bought a candy bar at the checkout... Now groceries cost " + (costofGroceries + 2.15) + ", which is more than they should have.")

    console.log('Fix a Birth Certificate:')
//	A birth certificate was printed incorrectly, change the middle initial to something else
//  ↓ YOUR CODE HERE ↓
console.log("I decided to change my middle initial... Now my middle initial is " + (myMiddleInitial = "V") + " and I like it better.")
    console.log('Changing Seasons:')

//	The season has changed, update the hot outside variable	to be opposite of what it was
//  ↓ YOUR CODE HERE ↓
    console.log("The season quickly changed here in Colorado... So is it hot right now? " + (howHotIsItOutsideToday = "True") + " but it will change again soon.")

    console.log('Full Name:')
//	Create a new variable called full name using the customer's
//  first name, the middle initial, and a last name of your choice
//  ↓ YOUR CODE HERE ↓
console.log("I just discovered the full name of a random stranger... Their name is " + (firstName + " " + myMiddleInitial) + " Wambsgans")

    console.log('Introduce a Customer:')
//	Print a line to the console that introduces the customer 
//	including the name, and saying that they live at the address variable
//  ↓ YOUR CODE HERE ↓
console.log("This is our favorite customer. Their name is Lucas Jones and he lives at " + (streetAddress) + " which you can clearly see written right here on the screen.")


    console.log('-----------Finished------------')