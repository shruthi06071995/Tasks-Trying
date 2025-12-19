//Script VAriables
let firstName = "Yum"; //String
let age = 5;    //Integer
let isYoung = true; //Boolean
let lastName = undefined; //undefined
let trophy = null //null

//OBJECTS ->{}
let persons = {
    name: "Yum",
    age: 5,
    gender: "male",
    address: "china",
    siblings: {
        brother: "Kim",
        sister: "sha",
    }
}
//DOt Notation
console.log(persons.siblings)

//Bracket Notation
console.log(persons['age'])

//ARRAY -> []
let arrayEmpty = [] // Empty Array
let favColour = ["Black", "Pruple", "Orange"]
//position of the colours shown in index
console.log(favColour[2])

let favColours = ["Black", "Pruple", "Orange"]
favColours[4] = 50
console.log(favColours.length)

//Function
function greetUser() {
    //set of statements
    let name = "Yum";
    let msg = "Hello" + " " + name + " " + "How are you";
    console.log(msg)
}
greetUser()

// variable declared out side the function
function greetUser(name) {
    let msg = "Hello" + " " + name + " " + "How are you";
    console.log(msg)
}
greetUser("Kim")
greetUser("Yung")

//Two name First and Last name declared outside the function
function greetUser(firstName, lastName) {
    let msg = "Hello" + " " + firstName + " " + lastName + " " + "How are you";
    console.log(msg)
}
greetUser("Kim", "long")
greetUser("Yung", "Long")

// Using Function Logics Operation
// Addition operation
function add(number1, number2) {
    console.log(number1 + number2)
}
add(50, 68)

//Subraction operation
function sub(num1, num2) {
    console.log(num1 - num2)
}
sub(95, 65)

//Multiplication operation
function mul(n1, n2) {
    console.log(n1 * n2)
}
mul(10, 10)

//Division operation
function div(div1, div2) {
    console.log(div1 / div2)
}
div(100, 10)

//OPERATORS (OPERATIONS)
//Arithmetic Operation
let number1 = 5;
let number2 = 10;

console.log(number1 + number2)
console.log(number1 - number2)
console.log(number1 * number2)
console.log(number1 / number2)
console.log(number1 % number2)
console.log(number1 ** number2)

//Arithmetic -> Increment (++)
console.log(++number1)
console.log(number1)

console.log(number2++)
console.log(number2)

//Arithmetic -> decrement (--)
console.log(--number1)
console.log(number1)

console.log(number2--)
console.log(number2)

//TERNARY Operator (Theme park Work Flow)
// If a person's age is more than 18,
// They are 'Adult' category, otherwise,
// They are a 'Child' category

let age1 = 24;

/*//without ternary operators first used methods
if(condition) {
    //condition run 
    let type = 'Adult ticket';
} else {
    //else run 
    let type = 'Child ticket';
} */

//After ternary comes 
let type = age1 > 18 ? "Adult ticket" : "Child Ticket"

console.log(type);

//LOGICAL OPERATORS
//LOGICAL AND (&&)
//return TRUE if both operands are TRUE (rendu conditions um true ah irundha true )
console.log(true && true);
console.log(false && true);

//Logical OR (||)
//return TRUE if anyone operands are TRUE ()
console.log(true || false);
console.log(true || true);

//Logical NOT (!)
//it gives opposite result
console.log(true)

/* Bank loan eligibility operation using logical operatior
* High income, CIBILScore -> loan eligible or Not eligible*/

let highIncome = true;
let CIBILScore = false;

//et eligibilityPerson = highIncome && CIBILScore

//console.log("Loan Status:" + eligibilityPerson);

let eligibilityPerson = highIncome || CIBILScore

let applicationStatus = !eligibilityPerson

console.log("Loan Status: " + eligibilityPerson);
console.log("Application Status: " + applicationStatus)

//Falsy (false but not false)
//undefined
//null
// 0
// false
// '' -> ""
//NaN


//Truty -> Anything that is not falsy is -> Truthy
//false || false || true 
// takes first two expressions 

//let userColor = "red";
let userColor = undefined
let defaultColor = "blue";

let currentColor = userColor || defaultColor

console.log("Selected Colour :" + " " + currentColor);

//CONDITIONAL OPERATOR
//IF STATEMENT

let condition = true ;
                                  // for multiple lines of code {} required
if (condition) {                    // for single code {} not required, 
    console.log("Condition: True");
}
else {
    console.log("Conditon: False");
}

// real example for if
/*let weather = "hot";

if(weather === "hot") {
    console.log("Weather is Hot!");
}
else {
    console.log("Weather is cold");
} */

//if, else
let isRaining = false; // with both the comditions one is false so if runs
//let isCloudy = true;
let isCloudy = false ; // both the conditions are false else runs

if (isRaining || isCloudy) {
    console.log("Don't forget to take Umberlla!");
} else {
    console.log("Enjoy the Weather!"); 
}

//if, else if, else using Greeting Application (Hours are used in 24hrs format)
//Logic -> If hour is between 12AM(0) to 1PM(13) => Good Morning
//Else if hour is between 1PM(13) to 5PM(17) => Good Afternoon
//Else hour is between 5PM(17) to 12AM(0) => Food Evening

let hour = 5;

if(hour >= 0 && hour <= 13) {
    console.log("Good Morning");
}
else if(hour >= 13 && hour <= 17) {
    console.log("Good Afterrnoon");
}
else {
    console.log("Good Evening");
    
}