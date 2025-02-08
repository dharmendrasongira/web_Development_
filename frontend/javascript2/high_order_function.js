function multiplegreet(fun, n){
    //high ordeer function kyuki input me function le raha hai
    for (let i =0; i<=n;i++){
        fun();
    }
}
let greet =function(){
    console.log("hello ");
} 

multiplegreet(greet,2);