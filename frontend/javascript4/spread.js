// Original array
let arr = [1, 2, 5, 6, 9];

// Using the spread operator to log each element of the array individually
console.log(...arr); // Output: 1 2 5 6 9

// Using Math.min with the spread operator to find the minimum value in the array
let min = Math.min(...arr);
console.log(min); // Output: 1

// Original string
let str = "Apnacollege";

// Using the spread operator to log each character of the string individually
console.log(...str); // Output: A p n a c o l l e g e

// Copying the original array using the spread operator
let newarr = [...arr]; // Creates a shallow copy of 'arr'

// Logging the copied array
console.log(newarr); // Output: [1, 2, 5, 6, 9]

// Converting a string to a character array using the spread operator
let chararr = [..."apnacollege"]; // Each character becomes an element in the array

// Logging the character array
console.log(chararr); // Output: ['a', 'p', 'n', 'a', 'c', 'o', 'l', 'l', 'e', 'g', 'e']

// Merging two arrays using the spread operator
let even = [2, 4, 6, 8];
let odd = [1, 3, 7];

// Merging 'even' and 'odd' arrays into a new array
let merge = [...even, ...odd];

// Logging the merged array
console.log(merge); // Output: [2, 4, 6, 8, 1, 3, 7]
