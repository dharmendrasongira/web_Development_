const student={
    name : "aman",
    marks:95,
   prop: this, //global scope
//normal function

getName :function (){
    console.log(this);// student obejct  ko print hoga kyuki usko this manata jaha se call hota
 return thise.name; 
},

getMarks:()=> {// arrow function
    console.log(this);} //window object print hoga kyuki ye parent ka this ko apna this manta 
}

//use kaha hoga jab esa kuch ki set time wager jese function use kare
const student1={
    name : "aman",
    marks:95,
   prop: this, //global scope
//normal function

getinfo :function (){
 setTimeout(  function (){ console.log(this);},2000);// window ko point karega kyuki call inbuilt function ne kiyahai 
 return thise.name; 
},

getinfo2:function(){
  setTimeout(  ()=> {
    console.log(this);}) //ye student1 ko point karega getinfo function parent hai uska this object student1 ko point kar rha toh usko point karega
}}