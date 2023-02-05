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
  let startIndex = 0;
  let endIndex = array.length - 1;
  while (startIndex < endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (value === array[endIndex]) {
      return `The value ${value} is found at index ${endIndex} in the array`;
    }
    if (value === array[middleIndex]) {
      return `The value ${value} is found at index ${middleIndex} in the array`;
    }
    if (value > array[middleIndex]) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
  return `The value ${value} is not found in array`;
}

let array = [19, 5, 17, 50, 20, 27, 3, 10, 11, 35, 21, 43, 44, 6, 14];

let sortedArray = array.sort((x, y) => x - y);

document.getElementById(
  "pbs5"
).innerHTML = `Binary Search Result is - ${binarySearch(sortedArray, 19)}`;
