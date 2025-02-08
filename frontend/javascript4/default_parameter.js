function sum(a,b=4){
    return a+b;
}
sum(2);// Function with a default parameter
// 'b' defaults to 4 if not provided.
function sum(a, b = 4) {
    return a + b; // Returns the sum of 'a' and 'b'.
}

// Call the function with one argument (2)
// 'b' will use the default value (4).
let result = sum(2);

/*
    Explanation:
    - 'a' = 2
    - 'b' = 4 (default)
    - Calculation: 2 + 4 = 6
*/

console.log(result); // Output: 6

// Example of using two arguments:
// sum(2, 10) would return 12 (2 + 10).
