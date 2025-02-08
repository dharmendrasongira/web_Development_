let arr = [1, 2, 3, 4, 5];

// Method 1: Using map with a named function
function print(ele) {
    return ele * 2;
}

let doubledArr1 = arr.map(print);
console.log(doubledArr1); // [2, 4, 6, 8, 10]

// Method 2: Using map with an anonymous function
let doubledArr2 = arr.map(function(ele) {
    return ele * 2;
});
console.log(doubledArr2); // [2, 4, 6, 8, 10]

// Method 3: Using map with an arrow function
let doubledArr3 = arr.map((ele) => {
    return ele * 2;
});
console.log(doubledArr3); // [2, 4, 6, 8, 10]
