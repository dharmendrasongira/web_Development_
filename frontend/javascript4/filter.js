// Original array
let arr = [1, 2, 3, 4, 5];

// Filter even numbers from the array
let evenNumbers = arr.filter((ele) => {
    return ele % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

// Filter elements that are less than 2
let lessThanTwo = arr.filter((ele) => {
    return ele < 2;
});
console.log(lessThanTwo); // Output: [1]
