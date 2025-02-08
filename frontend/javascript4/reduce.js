// Original array
let arr = [1, 2, 3, 4, 5, 6];

// Use reduce to sum up all the elements in the array
let answer = arr.reduce((res, ele) => {
    return res + ele;
});

/*
    Reduce operation breakdown:
    - Initial accumulator (res) value: 1 (first element of array by default)
    
    Iteration 1:
    res = 1, ele = 2
    res + ele = 1 + 2 = 3

    Iteration 2:
    res = 3, ele = 3
    res + ele = 3 + 3 = 6

    Iteration 3:
    res = 6, ele = 4
    res + ele = 6 + 4 = 10

    Iteration 4:
    res = 10, ele = 5
    res + ele = 10 + 5 = 15

    Iteration 5:
    res = 15, ele = 6
    res + ele = 15 + 6 = 21

    Final result (answer): 21
*/

console.log(answer); // Output: 21
