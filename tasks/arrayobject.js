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

let condition = true;
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
let isCloudy = false; // both the conditions are false else runs

if (isRaining || isCloudy) {
    console.log("Don't forget to take Umberlla!");
} else {
    console.log("Enjoy the Weather!");
}

//if, else if, else using Greeting Application (Hours are used in 24hrs format)
//Logic -> If hour is between 12AM(0) to 1PM(13) => Good Morning
//Else if hour is between 1PM(13) to 5PM(17) => Good Afternoon
//Else hour is between 5PM(17) to 12AM(0) => Food Evening

/*let hour = 5;

if(hour >= 0 && hour <= 13) {
    console.log("Good Morning");
}
else if(hour >= 13 && hour <= 17) {
    console.log("Good Afterrnoon");
}
else {
    console.log("Good Evening");   
} */

//let hrs = new Date();
//let hour = hrs.getHours()

let hour = new Date().getHours();

if (hour >= 0 && hour <= 13) {
    console.log("Good Morning");
}
else if (hour >= 13 && hour <= 17) {
    console.log("Good Afterrnoon");
}
else {
    console.log("Good Evening");
}

//console.log(hour.getHours());

//SWITCH CASE

// switch case and if condition has same condition but different situation changes
// BAsic syntax for switch case
/* switch(condition) {
    case 1:
        console.log("1");
    case 2:
        console.log("2");
    default :
    console.log("Default Behaviour");
} */

//Grade Feedback system
/*let  grade = "U";

switch(grade) {
    case "S":
        console.log("Super Grade");
        break;
    case "A":
    case "B": //For satisfing multiple cases result can be given once
        console.log("Excellent Grade");
        break;
    case "E":
        console.log("Just Pass!");
        break;
    case "U":
        console.log("Fail");
        break;
    default:
        console.log("Unknown Grade!");      
} */

//Using Mark

let mark = 99;
//inside the switch the condition always should be true
switch (true) {
    case mark > 90:
        console.log("Excellent!");
        break;
    case mark > 50:
        console.log("Pass!");
        break;
    // algorithm should be in order otherwise expected result won't be shown
    case mark < 50:
        console.log("Fail!");
        break;
    default:
        console.log("Unknown Grade");
}

//Example: Mobile buying suggestion 
//If given saving amount is > 10k Buy Android Mobile
//Else if given amount is > 60K Buy iPhone Mobile
//Else if given amount is > 5 && < 10 Buy Basic Mobile 
//Else Print "You can't afford mobile phone now!"

let amt = 9000;

switch (true) {
    case amt > 10000:
        console.log("Buy Android Mobile");
        break;
    case amt > 60000:
        console.log("Buy iPhone Mobile");
        break;
    case amt > 5000 && amt < 10000:
        console.log("Buy Basic Mobile");
        break;
    default:
        console.log("You cant't afford mobile phone now!");
}

//LOOPs
/* -> for loop 
-> While loop
-> Do While loop
-> For-in loop
-> For-of loop */

//For loop Syntax
/* for(initialExpression; condition; step[inc/dec]) {
    console.log("Number #1");
} */

/* for (let i = 1; i <= 5; i++) {
    console.log("Number #"+ i);
} */

//Display only odd Numbers

/* for(let i = 1; i <= 5; i++) {

    if (i % 2 !==0) {
        console.log("Odd Number #" + i); 
    }
} */
//Reversing the loop 
/*or(let i = 10; i >= 1; i--) {
    if (i % 2 !== 0) {
    console.log("Odd Number Reversed" + " " + i);
    }
} 

While Loop
taking out initialExpression and Step it has condition and inline to access first
syntax:
initialExpression
for(condition){
    if(inline condition){
    console.log("output");
    }
    inc/dec;
} */

let i = 15;

while (i >= 1) {
    if (i % 2 !== 0) {
        console.log("Odd number using while loop :" + i);
    }
    i--;
}

//For-in (Modern Javascript)
//index 'key' is used in for-in
const person1 = {       //objects
    name: 'Ing',
    age: 5,
    sex: 'female',
};

for (let key in person1) {
    console.log(key + " : " + person1[key]);
}

let colours = ['red', 'blue', 'black'];     //array

for (let key in colours) {
    console.log(colours[key]);

}

//For-Of (index are not required)

let foods = ['Dosa', 'Poori', 'Parrota'];

for (let food of foods) {
    console.log("Foods :" + food);

}

//OOP (Object Oriented Programming)
// let name1 = "Sangshi";
// let ages = 25;
// let intrest = ['Drawing', 'Painting', 'Designing'];
// let address = {
//     city: "placea",
//     state: "oplala"
// }

// function greeting() {
//     //let msg1 = "My name is " + name + ", I love" + intrest;
//     //tilda method
//     let msg1 = `My name is ${name1}, I love ${intrest}`;
//     console.log(msg1);
// }
// //greeting();

let person2 = {
    name1: 'Sangshi',
    ages: 25,
    intrest: ['Drawing', 'Painting', 'Desinging'],
    isAlive: true,
    address: {
        city: "placea",
        state: "oplala",
    },
    greeting: function () {
        let msg1 = `My name is ${this.name1}, I love ${this.intrest}`;
        console.log(msg1);
    }
};
person2.greeting();

//Factory Functions
function createPerson(name) {
    return {
        name2 : name, 
        greeting() {
            let msg2 = `My name is ${this.name2}`;
            console.log(msg2);
        }
    };
}
let kim = createPerson("Kim"); 
let ming = createPerson("Ming");
kim.greeting();
ming.greeting();

//Constructor Function
function Person3(name){
    this.name3 = name;
    this.greeting = function() {
        console.log(`My name is ${this.name3}`);
    }
}
let person4 = new Person3("Motu");
person4.greeting();

//Dynamic Object
const person5 = {
    name: "Lilly",
}
person5.age = 16;
person5.greeting = function() {}

delete person5.age;
delete person5.name;

console.log(person5);

//CONSTRUCTOR PROPERTIES
console.log(person4.constructor);

// let x = {}; // -> let x = new Object () {} //=> object constructor
// let name1 = "Lotus"; //-> new String("Lotus") => name literals
// let age2 = 3 ; // -> new Number(3) => number literals
// let isAlive = true; //-> new Boolean(true) => boolean literals

//console.log(name1, age2, isAlive);

 let name5 = new String("Lill");
 let age5 = new Number (3);
 let isAlive = new Boolean (true);

 console.log(name5, age5, isAlive)