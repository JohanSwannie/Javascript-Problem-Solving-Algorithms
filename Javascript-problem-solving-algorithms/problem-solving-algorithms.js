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

// Linear Search

function linearSearch(linearSearchArray, value) {
  for (let i = 0; i < linearSearchArray.length; i++) {
    if (linearSearchArray[i] === value) {
      return `Value "<b style="color: red">${value}</b>" found at z ${i} of linearSearchArray`;
    }
  }
}

let linearSearchArray = [
  "Billy",
  "Garreth",
  16,
  true,
  false,
  undefined,
  "Luke",
  "Mary",
  "Oh Yes",
];

document.getElementById(
  "pbs5"
).innerHTML = `Linear Search Result is - ${linearSearch(
  linearSearchArray,
  true
)}`;

// Binary search

function binarySearch(array, value) {
  let startz = 0;
  let endz = array.length - 1;
  while (startz < endz) {
    let middlez = Math.floor((startz + endz) / 2);
    if (value === array[startz]) {
      return `The value "<b style="color: red">${value}</b>" is found at z ${startz} in the array`;
    }
    if (value === array[middlez]) {
      return `The value "<b style="color: red">${value}</b>" is found at z ${middlez} in the array`;
    }
    if (value === array[endz]) {
      return `The value "<b style="color: red">${value}</b>" is found at z ${endz} in the array`;
    }
    if (value > array[middlez]) {
      startz = middlez + 1;
    } else {
      endz = middlez - 1;
    }
  }
  return `The value "<b style="color: red">${value}</b>" is not found in array`;
}

let array = [19, 5, 17, 50, 20, 27, 3, 10, 11, 35, 21, 43, 44, 6, 14];

let sortedArray = array.sort((x, y) => x - y);

document.getElementById(
  "pbs6"
).innerHTML = `Binary Search Result is - ${binarySearch(sortedArray, 3)}`;

// Reverse a String - Method 1

const string1 = "Hello all people of the earth";

const reversedString1 = string1.split("").reverse().join("");

document.getElementById(
  "pbs7"
).innerHTML = `Reversed string1 of "<b style="color: red">${string1}</b>"is now 
"<b style="color: red">${reversedString1}</b>"`;

// Reverse a String - Method 2

const string2 = "We will do our best to succeed";

let string3 = "";

for (let m = string2.length - 1; m > -1; m--) {
  string3 += string2[m];
}

document.getElementById(
  "pbs8"
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
  "pbs9"
).innerHTML = `Reversed string4 of "<b style="color: red">${string4}</b>"is now 
    "<b style="color: red">${reverseTheString(string4)}</b>"`;

// Factorials - Method 1

function factorialMethod1(value) {
  let result = value;
  if (value === 0 || value === 1) return 1;
  while (value > 1) {
    value--;
    result *= value;
  }
  return result;
}

document.getElementById(
  "pbs10"
).innerHTML = `Factorial Result 1 = ${factorialMethod1(7)}`;

// Factorials - Method 2

function factorialMethod2(value) {
  if (value === 0 || value === 1) return 1;
  for (let i = value - 1; i >= 1; i--) {
    value *= i;
  }
  return value;
}

document.getElementById(
  "pbs11"
).innerHTML = `Factorial Result 2 = ${factorialMethod2(6)}`;

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
  "pbs12"
).innerHTML = `Factorial Result 3 = ${factorialMethod3(9)}`;

// Fibonnaci - Method 1

function fibonacciMethod1(value) {
  let x = 1,
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
  "pbs13"
).innerHTML = `Fibonnaci Result 1 = ${fibonacciMethod1(9)}`;

// Fibonnaci - Method 2

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
  "pbs14"
).innerHTML = `Fibonnaci Result 2 = ${fibonacciMethod2(7)}`;

// Palindrome - Method 1

function checkIfPalindrome(string) {
  let regex1 = /[\W_]/g;
  let lowercaseString = string.toLowerCase().replace(regex1, "");
  let reverseString = lowercaseString.split("").reverse().join("");
  return reverseString === lowercaseString;
}

const string5 = "Sir, I demand, I am a maid named Iris";

result2 = `Is "<b style="color: red">${string5}</b>" a Palindrome - ${checkIfPalindrome(
  string5
)}`;

document.getElementById("pbs15").innerHTML = result2;

// Find longest word in a string - Method 1

const findTheLongestWordInString1 = (string) => {
  let splitString1 = string.split(" ");
  let wordFound1 = "";
  let longestWord1 = 0;
  for (let i = 0; i < splitString1.length; i++) {
    if (splitString1[i].length > longestWord1) {
      wordFound1 = splitString1[i];
      longestWord1 = splitString1[i].length;
    }
  }
  return `The longest word in the String is "<b style="color: red">${wordFound1}</b>" and is ${longestWord1} characters long`;
};

const string6 = "They walk to the opposite side of the lake 3 times a day";

document.getElementById("pbs16").innerHTML = `${findTheLongestWordInString1(
  string6
)}`;

// Find longest word in a string - Method 2

const findTheLongestWordInString2 = (string) => {
  let longestWord2 = string.split(" ").sort((a, b) => b.length - a.length);
  return `The Longest Word in the String is "<b style="color: red">${longestWord2[0]}</b>" and is ${longestWord2[0].length} characters long`;
};

const string7 =
  "Billy and Mary know the consequences of their dangerous trip to Walladrop";

document.getElementById("pbs17").innerHTML = `${findTheLongestWordInString2(
  string7
)}`;

// Find longest word in a string - Method 3

const findTheLongestWordInString3 = (string) => {
  let longestWord3 = string
    .split(" ")
    .reduce(
      (returnWord, currentWord) =>
        currentWord.length > returnWord.length ? currentWord : returnWord,
      ""
    );
  return `The Longest Word in the String is "<b style="color: red">${longestWord3}</b>" and is ${longestWord3.length} characters long`;
};

const string8 =
  "Tommy eat healthy and consumes sufficient amounts of nutrients daily";

document.getElementById("pbs18").innerHTML = `${findTheLongestWordInString3(
  string8
)}`;

// Return largest Numbers in Arrays - Method 1

var largestNumber = [];

function largestNumbersInArrays1(array) {
  for (let p = 0; p < array.length; p++) {
    largestNumber.push(0);
  }
  for (var q = 0; q < array.length; q++) {
    for (var r = 0; r < array[q].length; r++) {
      if (array[q][r] > largestNumber[q]) {
        largestNumber[q] = array[q][r];
      }
    }
  }
  return largestNumber;
}

const array10 = [
  [19, 67, 57, 88, 7, 16, 33],
  [28, 71, 107, 22, 33, 51],
  [39, 44, 73, 55, 13, 10, 21],
  [444, 500, 177, 939, 239, 712],
  [49, 110, 183, 131, 77, 83],
];

let largestNumbers1 = `The largest number in each array is ${largestNumbersInArrays1(
  array10
)}`;

document.getElementById("pbs19").innerHTML = largestNumbers1;

// Return largest Numbers in Arrays - Method 2

function largestNumbersInArrays2(array) {
  return array.map((successiveArray1) =>
    successiveArray1.reduce(
      (prevNumber, currNumber) =>
        currNumber > prevNumber ? currNumber : prevNumber,
      0
    )
  );
}

const array11 = [
  [71, 167, 202, 183, 16, 29, 64],
  [191, 37, 7, 28, 38, 20, 18],
  [116, 41, 26, 53, 91, 16, 43],
  [21, 50, 111, 30, 49, 123],
  [41, 18, 401, 114, 22, 95],
];

let largestNumbers2 = `The largest number in each array is ${largestNumbersInArrays2(
  array11
)}`;

document.getElementById("pbs20").innerHTML = largestNumbers2;

// Return largest Numbers in Arrays - Method 3

function largestNumbersInArrays3(array) {
  return array.map((successiveArray2) =>
    Math.max.apply(null, successiveArray2)
  );
}

const array12 = [
  [4, 7, 20, 1, 9, 31, 6, 11, 8],
  [23, 45, 33, 20, 41, 19, 25],
  [37, 59, 65, 35, 14, 22, 88],
  [10, 20, 60, 30, 70, 40],
  [38, 27, 29, 47, 13, 12, 36],
];

let largestNumbers3 = `The largest number in each array is ${largestNumbersInArrays3(
  array12
)}`;

document.getElementById("pbs21").innerHTML = largestNumbers3;

// Return the 2 indices that add up 2 numbers to be the sum of the target

const determineIndices = (array13, target) => {
  for (let i = 0; i < array13.length; i++) {
    for (let j = i + 1; j < array13.length; j++) {
      if (array13[i] + array13[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
};

const array13 = [
  19, 10, 17, 3, 22, 31, 5, 11, 7, 59, 101, 117, 13, 113, 122, 30, 15, 71, 77,
  79, 16, 44, 63, 12, 87, 95, 61, 1, 119, 104, 107, 23, 28, 33, 5, 40, 70, 2,
];

let sumTarget = 214;

let indicesResult = `${determineIndices(array13, sumTarget)}`;

document.getElementById(
  "pbs22"
).innerHTML = `The first 2 indices that add up to ${sumTarget} are ${indicesResult}`;

// Convert Roman Numbers to Integers

const romanObject = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

let endResult = 0;

const romanNumberToInteger = (romanNumber) => {
  for (let i = 0; i < romanNumber.length; i++) {
    if (romanObject[romanNumber[i]] < romanObject[romanNumber[i + 1]]) {
      endResult -= romanObject[romanNumber[i]];
    } else {
      endResult += romanObject[romanNumber[i]];
    }
  }
  return endResult;
};

let inputRomanNumber = "MDCCLXVII";

let finalAnswer = `The Roman Number ${inputRomanNumber} converts to ${romanNumberToInteger(
  inputRomanNumber
)}`;

document.getElementById("pbs23").innerHTML = finalAnswer;
