// Original array
let arr = [1, 2, 3, 4, 5];

// Check if every element in the array is a multiple of 10
let ten = arr.every((ele) => {
    return ele % 10 === 0;
});
console.log(ten); // Output: false (none of the elements are multiples of 10)

// Use reduce to find the minimum element in the array
let min = arr.reduce((res, ele) => {
    return Math.min(res, ele);
});

console.log(min); // Output: 1
