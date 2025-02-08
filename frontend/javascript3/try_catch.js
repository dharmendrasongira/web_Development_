console.log("hello");
console.log("hello");
console.log(a);
//ye line error degi kyuki a kabi define ni kiya toh agye ka code exution ruk jayega but hum 
//vo nahi chate ki exuction ruk toh try catch use karnege

console.log("hello2");
console.log("hello2");


///right way

console.log("hello");
console.log("hello");
try{
console.log(a);}

catch{  //catch (e) bhi use kar skte ho jab error ko print karna ho ya or kuch karna ho
    console.log("error occur a is not define");
}


console.log("hello2");
console.log("hello2");
