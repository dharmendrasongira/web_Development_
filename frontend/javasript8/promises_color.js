function colorchange(color, delay) {
    return new Promise(( resolve, reject) => {

    setTimeout(() => {
        h1.style.color = color; // Change the color
        resolve("color changed");
    }, delay);
})
}

let request=colorchange("red",1000)
.then(()=> {
    console.log("red color was completed");
    return colorchange("orange",1000);
})
.then(()=>{
    console.log("orange color was completed ");
    return colorchange("pink", 2000);
})
.then(()=>{
    console.log("pink color was completed ");
    
}); 