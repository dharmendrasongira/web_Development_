async function greet() {
    return "hello world"
}
// arrow function
 let hello = async()=>{};


 greet().then((result)=>{
    console.log("promise was reolved");
    console.log("result was",result);
 })
 .catch((error)=>{console.log("propmise was rejected",error)})


 async function name(){
    abc.Abc();
 }

 
 name().then((result)=>{
    console.log("promise was reolved");
    console.log("result was",result);
 })
 .catch((error)=>{console.log("propmise was rejected",error)})