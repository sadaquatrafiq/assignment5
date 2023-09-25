// // Chapter 21 (Changing Case)
// // Q#1
// var allLower = userInput.toLowerCase();

// // Q#2
// x=x.toLowerCase();

// // Q#3
// y=y.toUpperCase();

// // Q#4
// var newVariable = existingVariable.toLowerCase();

// // Q#5
// var newVariable = array[index].toLowerCase();

// Q#6
// alert(variable.toUpperCase());

// Q#7
// var cityName = prompt("Enter an city");
// var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

// console.log(capitalizedCityName)

// Chapter 22 - 25 (String)
// Q#1

var sameWords = "captain";
sameWords = sameWords.replace("ap", "");
console.log(sameWords);

// Q#2
var sameWords = "captain";
var numCharacters = sameWords.length;
console.log(numCharacters);

// Q#3
var animal = "elephant";
var seg = animal.substring(3, 7);
console.log(seg);

// Q#4
var str = "Hello, World!";
var numCharacters = str.length;
console.log(numCharacters);

// Q#5
var str = "Hello, World!";
var numCharacters = str.length;
console.log(numCharacters);

var newStr = str.substring(1, numCharacters - 3);
console.log(newStr);

// Q#6
var text = "To be or not to be.";
var indx = text.indexOf("be");

// Q#7
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");

// Q#8

var text = "Ready, set, go! On your mark, get set, go!";
var indx = text.lastIndexOf("go");
console.log(indx);

// Q#9
var str = "Hello, World!";
var indexNum = 5;

if (str.substring(indexNum, indexNum + 1) !== "") {
}

// Q#10
var str = "abcde";
var char = str.charAt(2);
console.log(char);

// Q#11

var text = "Hello, World!";
var cha = text.charAt(9);
console.log(cha);

// Q#12
var str = "Hello, World!";
var x = str.charAt(str.length - 1);
console.log(x);

// Q#13
var input = "Hello, World!";
var cha = input.charAt(4);
console.log(cha);

// Q#14
var str = "Hello, World!";
var particularChar = "l";

if (str.charAt(2) === particularChar) {
}

// Q#15
// Declare the string and array variables
let str1 = "Hello, World!";
let arr = [];

// Use a for loop to cycle through all the characters of the string
for (let i = 0; i < str1.length; i++) {
  arr[i] = str1.charAt(i);
}

// Print the array to the console
console.log(arr);

// Declare the reply variable
let reply = "I have no idea.";

// Replace the first instance of "no" with "yes" in the reply string
let revisedReply = reply.replace("no", "yes");

// Print the revised reply to the console
console.log(revisedReply);

// Q#16
var str = "Hello, 1 World!";
var newStr = str.replace("1", "one");
console.log(newStr); // Outputs: "Hello, one World!"

// Q#17
var x = "banana";
var y = x.replace(/a/g, "z");
console.log(y); // Outputs: "bznznz"

// Chapter 26 (rounding numbers)

// Q#1
var num = 7.25;
var roundedNum = Math.round(num);
console.log(roundedNum); // Outputs: 7

// Q#2
var origNum = 7.25;
var roundNum = Math.ceil(origNum);
console.log(roundNum); // Outputs: 8

// Q#3
var origNum = 7.25;
var roundNum = Math.floor(origNum);
console.log(roundNum); // Outputs: 7

// Q#4
var num = 7.25;
var roundedNum = Math.round(num);
console.log(roundedNum); // Outputs: 7

// Q#5
var num = 0.5;
var roundedNum;
if (num - Math.floor(num) < 0.5) {
  roundedNum = Math.floor(num);
} else {
  roundedNum = Math.ceil(num);
}
console.log(roundedNum); // Outputs: 0

// Chapter 27 (Random Numbers)
// Q#1
var randomNumber = Math.floor(Math.random() * 50) + 1;
console.log(randomNumber);

// Q#2
var randomNumber = Math.random();
console.log(randomNumber);

// Q#3
var diceRoll = Math.floor(Math.random() * 6) + 1;
console.log(diceRoll);

// Q#4
var tossResult = Math.random() < 0.5 ? "Head" : "Tail";
console.log(tossResult);

// Chapter 28, 29 (Converting Strings)
// Q#1
var str = "123";
var num = parseInt(str);
console.log(num); // Outputs: 123

// Q#2
function convertStringToInt(str) {
  let num = parseInt(str);
  return num;
}

let hy = "123";
let num1 = convertStringToInt(hy);
console.log(num1); // Outputs: 123

// Q#3
let num2 = "123.45";
let numm = parseFloat(num2);
console.log(numm); // Outputs: 123.45

// Q#4
function canConvertToNumber(str) {
  let num = parseFloat(str);
  return !isNaN(num);
}

let strr = "123.45";
console.log(canConvertToNumber(strr)); // Outputs: true

let str2 = "Hello, World!";
console.log(canConvertToNumber(str2)); // Outputs: false

// Q#5
let num0 = 123;

// Method 1: Using toString() method
let str5 = num0.toString();
console.log(str5); // Outputs: "123"

// Method 2: Using String() function
let str6 = String(num);
console.log(str6); // Outputs: "123"

// Method 3: Using string interpolation
let str3 = `${num}`;
console.log(str3); // Outputs: "123"

// Q#6
function convertNumberToString() {
  let num = 42;
  let str = num.toString();
  return str;
}

console.log(convertNumberToString()); // Outputs: "42"

// Q#7

let stri = "3.14";

// Method 1: Using parseInt() function
let int1 = parseInt(stri);
console.log(int1); // Outputs: 3

// Method 2: Using Math.floor() function
let int2 = Math.floor(str);
console.log(int2); // Outputs: 3

// Chapter 30 (Controlling the length of decimals)

// Q#1
// method 1
let newNum1 = num.toFixed(4);

// method 2

let nu = 3.14159;
let newNum = nu.toFixed(4); // newNum is now the string "3.1416"

// Q#2

num = Number(num.toFixed(2));

let nums = 3.14159;
num = Number(nums.toFixed(2)); // num is now the number 3.14

// Q#3
let nume = 3.14159;
if (nume.toFixed(2).length > 4) {
}

// Q#4
let numt = 3.141592653589793;
alert(numt.toFixed(2));
