/******************************************************************************

WELCOME TO YOUR FIRST JAVASCRIPT BASIC ASSIGNMENT!



All the assignment instructions are commented out so that you can write your 

code in between them. Remember to read the instructions CAREFULLY, write short 

comments for your code, and feel free to ask for help if you're stuck.



GOOD LUCK!

******************************************************************************/

/******************************************************************************

ASSIGNMENT 1



Your first task will be to link this javascript file to the index.html file

using one of the methods I showed in the first lecture.



<-- Locate the index.html file in the file browser and link it to this file, 

javascript.js

******************************************************************************/

/****************************************************************************** 

ASSIGNMENT 2



Last lecture I showed you how to make variables that can hold values of the 

various data types. Make some variables of the following datatypes: 

String, number, boolean, array

You can choose what the actual content is.

Try to use both the let and const keywords

******************************************************************************/

// const greetings = "hello, world"; //string = tekst
// const num1 = 1+1; //number = tall
// const isThisGuy = true; //boolean = true/false
// const shoppinglist = ["tomat", "egg","brød"]; // Array = liste
// console.log(greetings, num1, isThisGuy, shoppinglist);
/****************************************************************************** 

ASSIGNMENT 3



Try out a few of the operators we looked at (+, -, /, *)

as well as a few of the shorthand operators (++, --, +=, -=)

******************************************************************************/

const numb1 = 1+1+1+7;
const numb2 = 1-4-6+15;
const numb3 = 5/5;
const numb4 = 5*5
console.log(numb1, numb2, numb3, numb4);


let num = 5 //verdien er 5
num+=1 // pluss 1
num++ // pluss 1
num++ // pluss 1
console.log(num); // svaret er 8
num++ // pluss 1
num++ // pluss 1
console.log(num); //svaret er 10


let numero = 5 // Verdien er 5
numero--  // minus 1
console.log(numero) // = 4


let numm = 30 //verdien er 30
let numm2 = 20 // verdien er 20
numm += numm2 // 30+20+20 
console.log(numm + numm2) // 50 + 20 = 70




/****************************************************************************** 

ASSIGNMENT 4



Write an IF/ELSE conditional statement that checks that userName isn't 

empty(""), that the user age is 18+, and that userIsBlocked is false. 



(HINT: Use the && (logical AND) to check all 3 in one IF statement)



If all of these conditions are true, change the userIsLoggedIn variable to true 

and the goToPage variable to "/home" then console.log a welcome message. 



If any of the conditions for logging in are not met, console.log an error 

message.



Try changing the values of the variables to make sure your IF/ELSE conditional

can handle all cases correctly 

******************************************************************************/

let userName = "";

let userAge = 18;

let userIsLoggedIn = false;

let userIsBlocked = false;

let goToPage = "";

//your code here

/******************************************************************************

ASSIGNMENT 5



Make a variable called userTitle and set the content equal to "Mr." if userMale 

is true, or to "Mrs." if userMale is false. Use the TERNARY conditional to do 

this:



const variable = statement ? "this if true" : "this if not true"



Try changing userMale to both true and false and console.log your new variable,

to see that your conditional is working.

******************************************************************************/

const userMale = false;

//your code here
