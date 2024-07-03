console.log("Exercise 1");
let age = 99;
console.log(`I am ${age} years old`);
console.log("-------------");

console.log("Exercise 2");
var badVar = "var";
let goodVar = "let";
const constantVar = "const";
console.log(
  `${badVar}: Old way of declaring variable. Allows you to redeclare a variable. var can only be declared locally inside a function`
);
console.log(`${goodVar}: The new and better way of declaring a variable.`);
console.log(`${constantVar}: The way to declare a constant variable, that can't be changed.`);
console.log("-------------");

console.log("Exercise 3");
let str = "String";
let num = 10;
let isGood = true;
console.log(str);
console.log(num);
console.log(isGood);
console.log("-------------");

console.log("Exercise 4");
const name = "John";
console.log(name);
// name = "Steve";
// console.log(name);
console.log(
  "Can't reassign a constant. Better to use let if you want to change the variable later"
);
console.log("-------------");

console.log("Exercise 5");
console.log("When checking if a condition is met.");
console.log("-------------");

console.log("Exercise 6");
console.log(
  "const. Because a variable declared with the const keyword cannot be changed. This helps for ex. preventing mistakenly changing the value later on"
);
console.log("-------------");

console.log("Exercise 7");
let number1 = 5;
let number2 = 10;
let result = number1 + number2;
console.log(`Result: ${result}`);
console.log("-------------");

console.log("Exercise 8");
let result1 = number1 - number2;
let result2 = number1 * number2;
let result3 = number1 / number2;
console.log(`Result1: ${result1} Result2: ${result2} Result3: ${result3}`);
console.log("-------------");

console.log("Exercise 9");
let a = 2;
console.log(`Before: ${a}`);
a += 5;
console.log(`After: ${a}`);
console.log("-------------");

console.log("Exercise 10");
// let a = 10;
// a = a - 4;
// a = 7;
// a = a + 2;

// console.log(a);
console.log("a = 9");
console.log("-------------");

console.log("Exercise 11");
console.log("let a = 10. Declaring a variable 'a' and assigning the value 10");
console.log("a = a - 4. Assigning a the value of a(10) - 4 = 6");
console.log("a = 7. Assigning a the value 7");
console.log("a = a + 2. Assigning a the value of a(7) + 2 = 9");
console.log("-------------");
