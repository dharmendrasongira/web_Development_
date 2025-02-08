// Original array
let arr = [2, 4, 6, 1];

// Check if every element in the array is even just lik &&
let allEven = arr.every((ele) => ele % 2 === 0);
console.log(allEven); // Output: false (because 1 is not even)

// Check if some elements in the array are even just like ||
let someEven = arr.some((ele) => ele % 2 === 0);
console.log(someEven); // Output: true (because 2, 4, and 6 are even)
