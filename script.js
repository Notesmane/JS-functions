

// declare a funciton or function definition

// regular function declaration, this is only one way to define a function
// function sayHello(name) {
//     console.log(`Hello ${name}`); // declaring the parameter name
// }


// // function expression
// const sayBye = function(friend, pet) {
//     console.log(`Good Bye ${friend} and his pet ${pet}`);
// }


// let username = 'Clement';

// // call or execute function
// sayHello('John'); // passing the argument of the string 'john'
// sayHello(username);
// sayHello('Alex');
// sayHello('Mark');

// sayBye('John', 'bolt');

// Regular Function (with one parameter)
// function add(num1, num2) {
//     console.log(num1 + num2);
// }

// if (typeof num1 !== "number" || typeof num2 !== "number') {
//     console.log('Arguments need to be numbers');
// } else {
// }
// }

// console.log('================================================')

// // Regular Function (with one parameter)
// function add(num1, num2) {
//     console.log(num1 + num2);
// }
// add('1', 2)

// // Arrow Funtion (with 2 paramerters)
// const addTwoNumbers = (num1, num2) => console.log(num1 + num2);
// addTwoNumbers(2,2);

// // Arrow Function with no Parameters
// const sayHellowWorld = () => console.log('Hello World!');

// // Arrow Function (with one parameter)
// const sayHelloAgain = name => console.log(`Hello ${name}`);
// sayHelloAgain('Mark');

// console.log('================================================')

// Return Keyword (as soon as your program sees the Return keyword it will perform the function to the right
// of the Return Keyword then it will stop.. anthing after that (locally/nested) will not run. Similar to the
// break command in ForLoops)

// function mathHW(num1, num2) {
//     return num1 * num2; // returns the value outside of the funciton
// }

// const result = mathHW(3, 5);
// console.log(result);

// const mathHW2 = (num1, num2) => num1 - num2;  // you dont have to use the return key when you have a single line

// const total = mathHW2(10, 5);
// console.log(total);

// function areBothEven(n1, n2) {
//     // console.log( !(n1%2));
//     return !(n1 % 2) && !(n2 % 2);
// }

// const isEven = areBothEven(2, 2);
// console.log(isEven);

// // Return an Array
// function myArray(n1, n2) {
//     return [n1+n2];
// }

// const arr = myArray(3, 3);
// console.log(arr);

// // Return an Object
// function studentInfo(studentName, cohort, age) { // this creates the value of studentName, etc and passes in the value name:
//     return {
//         name: studentName,
//         cohort: cohort,
//         age // remember you dont have to use a comma when its the last one, also if the key word for the object (age) is the
//         // same as the variable name, if they are differnt such as studentName and name
//     }
// }

// const student1 = studentInfo('John', '101-2023', 22);

// console.log(student1);

console.log('================================================');

console.log("Exercise 1");
// write a function named computeArea usingt the function declaration approach
// it will have 2 parameters width and height

function computeArea(width, height) { // the width and height are the parameters
    // invoke the function to test it
    return console.log(`The area of a rectangle with a width of ${width} and a height of ${height} is ${width * height} square units.`);
}

// it will compute the area of a rectangle (width x height) and a return a string in the following form:
computeArea(8, 4); // the 8 and 4 are the arguments of the parameters AKA inputs

// The area of a rectangle with a width of __ and a height of __ is __ square units.

// I have a lovely bunch of coconuts

console.log("Exercise 2");
// Write a function named planetHasWaterusing the function expression syntax.
// It will have one parameter: planet.
// Return trueif the planetargument is either "Earth" or "Mars", otherwise return false.
// Bonus points if you ensure the function will work regardless of the casing of the planetbeing passed in ('earth', 'MARS', etc.).
// Invoke the function a couple of times to test it!
const planetHasWater = function(planet) {
    planet = planet.toLowerCase();
    if(planet === 'earth' || planet === 'mars') {
        return true;
    }
    else {
        return false;
    }
}
console.log(planetHasWater("EaRtH"));
console.log(planetHasWater("MaRs"));
console.log(planetHasWater('Jupiter'));

console.



// // Regular Function (with one parameter)
// function add(num1, num2) {
//     console.log(num1 + num2);
// }
// add('1', 2)

// // Arrow Funtion (with 2 paramerters)
// const addTwoNumbers = (num1, num2) => console.log(num1 + num2);
// addTwoNumbers(2,2);