// * --------------------------------------------------
// * REMOVE DUPLICATES FROM AN ARRAY - METHOD 1
// * --------------------------------------------------

const removeTheDuplicates = (array1) => {
  const array2 = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) === -1) {
      array2.push(array1[i]);
    }
  }
  return array2.sort((a, b) => a - b);
};

const array1 = [14, 8, 33, 7, 18, 14, 19, 27, 33, 1, 8, 13, 2, 19, 33];

document.getElementById(
  "pbs1"
).innerHTML = `First Array without Duplicates is ${removeTheDuplicates(
  array1
)}`;

// * --------------------------------------------------
// * REMOVE DUPLICATES FROM AN ARRAY - METHOD 2
// * --------------------------------------------------

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
).innerHTML = `Second Array without Duplicates is ${array4}`;

// * --------------------------------------------------
// * REMOVE DUPLICATES FROM AN ARRAY - METHOD 3
// * --------------------------------------------------

const array5 = [11, 28, 13, 18, 7, 11, 7, 28, 10, 15, 13, 18];

const object1 = {};

for (let value of array5) {
  object1[value] = true;
}

const array6 = [...Object.keys(object1)];

document.getElementById(
  "pbs3"
).innerHTML = `Third Array without Duplicates is ${array6}`;

// * --------------------------------------------------
// * REMOVE DUPLICATES FROM AN ARRAY - METHOD 4
// * --------------------------------------------------

const array7 = [1, 18, 22, 10, 18, 20, 13, 10, 11, 9, 27, 1, 19];

const array8 = [...new Set(array7)].sort((a, b) => a - b);

document.getElementById(
  "pbs4"
).innerHTML = `Fourth Array without Duplicates is ${array8}`;

// * --------------------------------------------------
// * LINEAR SEARCH
// * --------------------------------------------------

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

// * --------------------------------------------------
// * BINARY SEARCH
// * --------------------------------------------------

function binarySearch(array, value) {
  let starts = 0;
  let ends = array.length - 1;
  while (starts < ends) {
    let middle = Math.floor((starts + ends) / 2);
    if (value === array[starts]) {
      return `The value "<b style="color: red">${value}</b>" is found at index ${starts} in the array`;
    }
    if (value === array[middle]) {
      return `The value "<b style="color: red">${value}</b>" is found at index ${middle} in the array`;
    }
    if (value === array[ends]) {
      return `The value "<b style="color: red">${value}</b>" is found at index ${ends} in the array`;
    }
    if (value > array[middle]) {
      starts = middle + 1;
    } else {
      ends = middle - 1;
    }
  }
  return `The value "<b style="color: red">${value}</b>" is not found in array`;
}

let array = [19, 5, 17, 50, 20, 27, 3, 10, 11, 35, 21, 43, 44, 6, 14];

let sortedArray = array.sort((x, y) => x - y);

document.getElementById(
  "pbs6"
).innerHTML = `Binary Search Result is - ${binarySearch(sortedArray, 27)}`;

// * --------------------------------------------------
// * BUBBLE SORT
// * --------------------------------------------------

function bubbleSort(bubbles) {
  for (let i = 0; i < bubbles.length; i++) {
    for (let j = 0; j < bubbles.length - i - 1; j++) {
      if (bubbles[j] > bubbles[j + 1]) {
        const smallerValue = bubbles[j + 1];
        bubbles[j + 1] = bubbles[j];
        bubbles[j] = smallerValue;
      }
    }
  }
  return bubbles;
}

let bubbleSortArray = [
  19, 28, 11, 15, 33, 2, 14, 22, 9, 16, 30, 5, 15, 38, 8, 3,
];

document.getElementById(
  "pbs7"
).innerHTML = `New bubble sorted array = ${bubbleSort(bubbleSortArray)}`;

// * --------------------------------------------------
// * OBJECT TREES
// * --------------------------------------------------

function getSiblings(family) {
  if (family.siblings.length === 0) {
    return;
  }

  family.siblings.forEach((sibling) => {
    siblingsArray.push(`${sibling.fullName}`);
    getSiblings(sibling);
  });
}

const family = {
  fullName: "Pete Lamb",
  siblings: [
    {
      fullName: "Graham Sidaway",
      siblings: [
        {
          fullName: "Brendan Sheehan",
          siblings: [],
        },
        {
          fullName: "Paul Murray",
          siblings: [
            {
              fullName: "Peter Murray",
              siblings: [],
            },
            {
              fullName: "Josh Murray",
              siblings: [],
            },
            {
              fullName: "Michelle Murray",
              siblings: [],
            },
            {
              fullName: "Matthew Murray",
              siblings: [],
            },
            {
              fullName: "Luke Murray",
              siblings: [],
            },
            {
              fullName: "Julia Murray",
              siblings: [],
            },
            {
              fullName: "Mary Murray",
              siblings: [],
            },
          ],
        },
      ],
    },
  ],
};

let siblingsArray = [];

getSiblings(family);

document.getElementById("pbs8").innerHTML = `The Siblings are ${siblingsArray}`;

// * --------------------------------------------------
// * REVERSE A STRING - METHOD 1
// * --------------------------------------------------

const string1 = "Hello all people of the earth";

const reversedString1 = string1.split("").reverse().join("");

document.getElementById(
  "pbs9"
).innerHTML = `Reversed string1 of "<b style="color: red">${string1}</b>"is now 
"<b style="color: red">${reversedString1}</b>"`;

// * --------------------------------------------------
// * REVERSE A STRING - METHOD 2
// * --------------------------------------------------

const string2 = "We will do our best to succeed";

let string3 = "";

for (let m = string2.length - 1; m > -1; m--) {
  string3 += string2[m];
}

document.getElementById(
  "pbs10"
).innerHTML = `Reversed string2 of "<b style="color: red">${string2}</b>"is now 
  "<b style="color: red">${string3}</b>"`;

// * --------------------------------------------------
// * REVERSE A STRING - METHOD 3
// * --------------------------------------------------

function reverseTheString(string) {
  if (string === "") {
    return "";
  } else {
    return reverseTheString(string.substr(1)) + string.charAt(0);
  }
}

const string4 = "The way to go is Mobil";

document.getElementById(
  "pbs11"
).innerHTML = `Reversed string4 of "<b style="color: red">${string4}</b>"is now 
    "<b style="color: red">${reverseTheString(string4)}</b>"`;

// * --------------------------------------------------
// * FACTORIALS - METHOD 1
// * --------------------------------------------------

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
  "pbs12"
).innerHTML = `Factorial Result 1 = ${factorialMethod1(7)}`;

// * --------------------------------------------------
// * FACTORIALS - METHOD 2
// * --------------------------------------------------

function factorialMethod2(value) {
  if (value === 0 || value === 1) return 1;
  for (let i = value - 1; i >= 1; i--) {
    value *= i;
  }
  return value;
}

document.getElementById(
  "pbs13"
).innerHTML = `Factorial Result 2 = ${factorialMethod2(6)}`;

// * --------------------------------------------------
// * FACTORIALS - METHOD 3
// * --------------------------------------------------

const factorialMethod3 = (value) => {
  if (value < 0) {
    return -1;
  } else if (value === 0) {
    return 1;
  }
  return value * factorialMethod3(value - 1);
};

document.getElementById(
  "pbs14"
).innerHTML = `Factorial Result 3 = ${factorialMethod3(9)}`;

// * --------------------------------------------------
// * FIBONNACI - METHOD 1
// * --------------------------------------------------

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
  "pbs15"
).innerHTML = `Fibonnaci Result 1 = ${fibonacciMethod1(9)}`;

// * --------------------------------------------------
// * FIBONNACI - METHOD 2
// * --------------------------------------------------

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
  "pbs16"
).innerHTML = `Fibonnaci Result 2 = ${fibonacciMethod2(7)}`;

// * --------------------------------------------------
// * PALINDROME - METHOD 1
// * --------------------------------------------------

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

document.getElementById("pbs17").innerHTML = result2;

// * --------------------------------------------------
// * FIND LONGEST WORD IN A STRING - METHOD 1
// * --------------------------------------------------

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

document.getElementById("pbs18").innerHTML = `${findTheLongestWordInString1(
  string6
)}`;

// * --------------------------------------------------
// * FIND LONGEST WORD IN A STRING - METHOD 2
// * --------------------------------------------------

const findTheLongestWordInString2 = (string) => {
  let longestWord2 = string.split(" ").sort((a, b) => b.length - a.length);
  return `The Longest Word in the String is "<b style="color: red">${longestWord2[0]}</b>" and is ${longestWord2[0].length} characters long`;
};

const string7 =
  "Billy and Mary know the consequences of their dangerous trip to Walladrop";

document.getElementById("pbs19").innerHTML = `${findTheLongestWordInString2(
  string7
)}`;

// * --------------------------------------------------
// * FIND LONGEST WORD IN A STRING - METHOD 3
// * --------------------------------------------------

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

document.getElementById("pbs20").innerHTML = `${findTheLongestWordInString3(
  string8
)}`;

// * --------------------------------------------------
// * RETURN LARGEST NUMBERS IN ARRAYS - METHOD 1
// * --------------------------------------------------

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

document.getElementById("pbs21").innerHTML = largestNumbers1;

// * RETURN LARGEST NUMBERS IN ARRAYS - METHOD 2

function largestNumbersInArrays2(arr) {
  return arr.map((successiveArray1) =>
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

document.getElementById("pbs22").innerHTML = largestNumbers2;

// * RETURN LARGEST NUMBERS IN ARRAYS - METHOD 3

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

document.getElementById("pbs23").innerHTML = largestNumbers3;

// * RETURN THE 2 INDICES THAT ADD UP 2 NUMBERS TO BE THE SUM OF THE TARGET

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
  "pbs24"
).innerHTML = `The first 2 indices that add up to ${sumTarget} are ${indicesResult}`;

// * CONVERT ROMAN NUMBERS TO INTEGERS

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

let romanToInt = `The Roman Number ${inputRomanNumber} converts to ${romanNumberToInteger(
  inputRomanNumber
)}`;

document.getElementById("pbs25").innerHTML = romanToInt;

// * CONVERT INTEGERS TO ROMAN NUMBERS

const IntegerToRomanNumber = (intNumber) => {
  const romanNumerals = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const naturalNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanN = "";
  while (intNumber !== 0) {
    const idxFnd = naturalNumbers.findIndex((number) => intNumber >= number);
    romanN += romanNumerals[idxFnd];
    intNumber -= naturalNumbers[idxFnd];
  }
  return romanN;
};

let inputIntNumber = 1767;

let intToRoman = `The Integer number ${inputIntNumber} converts to ${IntegerToRomanNumber(
  inputIntNumber
)}`;

document.getElementById("pbs26").innerHTML = `${intToRoman}`;

// * DETERMINE NUMERIC VALUES OF WORDS BASED ON APLHABETICAL SEQUENCES
// * THIS IS BASED ON A = 1, B = 2, C = 3 AND UP TO Z = 26

function wordToNumericValue(word) {
  let numValue = 0;
  for (var i = 0; i < word.length; i++) {
    numValue += parseInt(word[i], 36) - 9;
  }
  return numValue;
}

let word = "Fantastic";

document.getElementById(
  "pbs27"
).innerHTML = `The value of the word "${word}" is ${wordToNumericValue(word)}`;

// * DETERMINE WHAT KIND OF LOVE PRINCE CHARMING HAS FOR SNOW WHITE

function determineLove(numberOfPetals, array) {
  for (let i = 0; i <= numberOfPetals; i++) {
    array.push(array[i]);
  }
  return array[numberOfPetals - 1];
}

let numberOfPetals = Math.floor(Math.random() * 30) + 1;

let loveArray = [
  "I love you",
  "a little",
  "a lot",
  "passionately",
  "madly",
  "not at all",
];

document.getElementById("pbs28").innerHTML = `My love for you : ${determineLove(
  numberOfPetals,
  loveArray
)}`;

// * RETURN A NEW ARRAY WHERE THE FIRST SMALLEST NUMBER IS REMOVED IN THE ARRAY
// * METHOD 1

function removeSmallest(numbers) {
  let newArray = [];
  if (numbers.length === 0) {
    return newArray;
  }
  let smallestIndex = 0;
  let smallestNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallestNumber) {
      smallestNumber = numbers[i];
      smallestIndex = i;
    }
  }
  newArray = numbers
    .slice(0, smallestIndex)
    .concat(numbers.slice(smallestIndex + 1));
  return newArray;
}

document.getElementById(
  "pbs29"
).innerHTML = `New array after first smallest number is removed, is : ${removeSmallest(
  [5, 9, 9, 2, 1, 3, 8, 1, 2, 7]
)}`;

// * RETURN A NEW ARRAY WHERE THE FIRST SMALLEST NUMBER IS REMOVED IN THE ARRAY
// * METHOD 2

function removeSmallest2(numbers) {
  let smallestIndex2 = numbers.indexOf(Math.min(...numbers));
  return [
    ...numbers.slice(0, smallestIndex2),
    ...numbers.slice(smallestIndex2 + 1),
  ];
}

document.getElementById(
  "pbs30"
).innerHTML = `New array after first smallest number is removed, is : ${removeSmallest2(
  [5, 9, 9, 4, 13, 18, 21, 4, 7]
)}`;

// *  CONVERT EACH CHARACTER IN A STRING, FOLLOWED BY AN UNDERSCORE OR A DASH WITH AN UPPERCASE
// *  AND EXCLUDE THE UNDERSCORE AND OR DASH - METHOD 1

const convertStringToCamelCase = (stringToConvert) => {
  stringToConvert = stringToConvert.split("");
  return stringToConvert
    .map((character, index) => {
      if (character == "-" || character == "_") {
        character = stringToConvert[index + 1].toUpperCase();
        stringToConvert.splice(index + 1, 1);
      }
      return character;
    })
    .join("");
};

document.getElementById(
  "pbs31"
).innerHTML = `Converted string is : ${convertStringToCamelCase(
  "international_olymic-games"
)}`;

// *  CONVERT EACH CHARACTER IN A STRING, FOLLOWED BY AN UNDERSCORE OR A DASH WITH AN UPPERCASE
// *  AND EXCLUDE THE UNDERSCORE AND OR DASH - METHOD 2

function convertStringToCamelCase2(stringToConvert2) {
  return stringToConvert2.replace(/[_-]\w/gi, (character) =>
    character[1].toUpperCase()
  );
}

document.getElementById(
  "pbs32"
).innerHTML = `Converted string is : ${convertStringToCamelCase2(
  "national-sport_meeting"
)}`;

// * CHECK IF A SENTENCE IS A PANGRAM

const isPangram = (sentencePassed) => {
  let sentenceToCheck = sentencePassed
    .split(" ")
    .join("")
    .replace(/[\W\d]/g, "")
    .toLowerCase();
  return [...new Set(sentenceToCheck)].length === 26;
};

let passedSentence =
  "The man from Zillerpearbonexvalley, walks up and don like a champ thistling, thile the dog and cat jump over the kettle. The Queen vastly put a zeal on it";

document.getElementById(
  "pbs33"
).innerHTML = `Is the sentence a Pangram : ${isPangram(passedSentence)}`;
