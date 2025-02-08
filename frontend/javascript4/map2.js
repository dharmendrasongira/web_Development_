let arr = [
    {
        name: "aman",
        marks: 55,
    },
    {
        name: "dharmendra",
        marks: 99,
    },
    {
        name: "divya",
        marks: 99,
    }
];


// Using map to calculate CGPA
let getcgpa = arr.map((ele) => {
    return ele.marks / 10;
});

console.log(getcgpa);
// Output: [5.5, 9.9, 9.9]
