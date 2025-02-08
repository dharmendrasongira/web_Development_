// Original array
let arr = [1, 2, 8, 7, 5, 6];

// Use reduce to find the maximum element in the array
let max = arr.reduce((res, ele) => {
    return Math.max(res, ele);
});

/*
    Reduce operation breakdown (finding the maximum):
    
    Iteration 1:
    res = 1, ele = 2
    Math.max(1, 2) = 2

    Iteration 2:
    res = 2, ele = 8
    Math.max(2, 8) = 8

    Iteration 3:
    res = 8, ele = 7
    Math.max(8, 7) = 8

    Iteration 4:
    res = 8, ele = 5
    Math.max(8, 5) = 8

    Iteration 5:
    res = 8, ele = 6
    Math.max(8, 6) = 8

    Final result (max): 8
*/

console.log(max); // Output: 8
