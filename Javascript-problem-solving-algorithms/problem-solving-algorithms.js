// Remove duplicates from an array - Method 1

const array1 = [14, 8, 33, 7, 18, 14, 19, 27, 33, 1];

const array2 = [];

for (let i = 0; i < array1.length; i++) {
  if (array2.indexOf(array1[i]) === -1) {
    array2.push(array1[i]);
  }
}

const arrayWithoutDuplicates = array2.sort((a, b) => a - b);
document.getElementById(
  "pbs1"
).innerHTML = `First Array without Duplicates is ${arrayWithoutDuplicates}`;

// Remove duplicates from an array - Method 2

const array3 = [21, 15, 5, 19, 3, 15, 20, 29, 15, 21, 4, 23];

array3.sort((a, b) => a - b);

const array4 = [];

let initialValue;

for (let j = 0; j < array3.length; j++) {
  if (array3[j] !== initialValue) {
    array4.push(array3[j]);
    initialValue = array3[j];
  }
}

document.getElementById(
  "pbs2"
).innerHTML = `First Array without Duplicates is ${array4}`;

// Remove duplicates from an array - Method 3

const array5 = [11, 28, 13, 18, 7, 11, 7, 10, 15, 18];

const object1 = {};

for (let value of array5) {
  object1[value] = true;
}

const array6 = new Array(Object.keys(object1));

document.getElementById(
  "pbs3"
).innerHTML = `First Array without Duplicates is ${array6}`;

// Remove duplicates from an array - Method 4

const array7 = [1, 18, 22, 10, 18, 20, 13, 10, 11, 9, 27, 1, 19];

const array8 = [...new Set(array7)].sort((a, b) => a - b);

document.getElementById(
  "pbs4"
).innerHTML = `First Array without Duplicates is ${array8}`;

// Binary search

function binarySearch(array, value) {
  let startm = 0;
  let endm = array.length - 1;
  while (startm < endm) {
    let middlem = Math.floor((startm + endm) / 2);
    if (value === array[endm]) {
      return `The value ${value} is found at m ${endm} in the array`;
    }
    if (value === array[middlem]) {
      return `The value ${value} is found at m ${middlem} in the array`;
    }
    if (value > array[middlem]) {
      startm = middlem + 1;
    } else {
      endm = middlem - 1;
    }
  }
  return `The value ${value} is not found in array`;
}

let array = [19, 5, 17, 50, 20, 27, 3, 10, 11, 35, 21, 43, 44, 6, 14];

let sortedArray = array.sort((x, y) => x - y);

document.getElementById(
  "pbs5"
).innerHTML = `Binary Search Result is - ${binarySearch(sortedArray, 19)}`;

// Reverse a String - Method 1

const string1 = "Hello all people of the earth";

const reversedString1 = string1.split("").reverse().join("");

document.getElementById(
  "pbs6"
).innerHTML = `Reversed string1 of "<b style="color: red">${string1}</b>"is now 
"<b style="color: red">${reversedString1}</b>"`;

// Reverse a String - Method 2

const string2 = "We will do our best to succeed";

let string3 = "";

for (let m = string2.length - 1; m > -1; m--) {
  string3 += string2[m];
}

document.getElementById(
  "pbs7"
).innerHTML = `Reversed string2 of "<b style="color: red">${string2}</b>"is now 
  "<b style="color: red">${string3}</b>"`;

// Reverse a String - Method 3

function reverseTheString(string) {
  if (string === "") {
    return "";
  } else {
    return reverseTheString(string.substr(1)) + string.charAt(0);
  }
}

const string4 = "The way to go is Mobil";

document.getElementById(
  "pbs8"
).innerHTML = `Reversed string4 of "<b style="color: red">${string4}</b>"is now 
    "<b style="color: red">${reverseTheString(string4)}</b>"`;

// Factorials - Method 1

function factorialMethod1(value) {
  var result = value;
  if (value === 0 || value === 1) return 1;
  while (value > 1) {
    value--;
    result *= value;
  }
  return result;
}

document.getElementById(
  "pbs9"
).innerHTML = `Factorial Result 1 = ${factorialMethod1(7)}`;

// Factorials - Method 2

function factorialMethod2(value) {
  if (value === 0 || value === 1) return 1;
  for (var i = value - 1; i >= 1; i--) {
    value *= i;
  }
  return value;
}

document.getElementById(
  "pbs10"
).innerHTML = `Factorial Result 2 = ${factorialMethod2(4)}`;

// Factorials - Method 3

const factorialMethod3 = (value) => {
  if (value < 0) {
    return -1;
  } else if (value === 0) {
    return 1;
  }
  return value * factorialMethod3(value - 1);
};

document.getElementById(
  "pbs11"
).innerHTML = `Factorial Result 3 = ${factorialMethod3(9)}`;

// Fibonnaci - Method 1

function fibonacciMethod1(value) {
  var x = 1,
    y = 0,
    temp;

  while (value >= 0) {
    temp = x;
    x = x + y;
    y = temp;
    value--;
  }
  return y;
}

document.getElementById(
  "pbs12"
).innerHTML = `Fibonnaci Result 1 = ${fibonacciMethod1(9)}`;

// Fibonnaci - Method 1

function fibonacciMethod2(value) {
  if (value == 0) {
    return 0;
  }
  if (value == 1) {
    return 1;
  } else {
    return fibonacciMethod2(value - 1) + fibonacciMethod2(value - 2);
  }
}

document.getElementById(
  "pbs13"
).innerHTML = `Fibonnaci Result 2 = ${fibonacciMethod2(7)}`;
