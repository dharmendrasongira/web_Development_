
 
let arr = [1, 2, 3, 4, 5];

// Method 1: Using forEach with a named function
function print(ele) {
    console.log(ele);
}

arr.forEach(print); 
// Output: 
// 1
// 2
// 3
// 4
// 5

// Method 2: Using forEach with an anonymous function
arr.forEach(function(ele) {
    console.log(ele);
});
// Output: 
// 1
// 2
// 3
// 4
// 5

// Method 3: Using forEach with an arrow function
arr.forEach((ele) => {
    console.log(ele);
});
// Output: 
// 1
// 2
// 3
// 4
// 5
