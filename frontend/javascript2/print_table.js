function table(n){
    for ( i = n; i <= 10*n;i +=n){
        console.log(i);
    }
}

table(4);

//sum
function sum(n){
    let ans =0;
    for ( i = n; i <= n;i++){
        ans +=i;
    }
    return ans;
}


/// string  merge
let str = ["hi", "hello"," bye", "!"];

function concat(str){
    let result="";
    for (let i =0; i <str.length; i++){
        result += str[i];
    }
    return result;
}