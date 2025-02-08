
// object is collection of properities
 let student ={
   name : "dharmendra",
   age : 23,
   marks :94,
   city : "dewas"
 };

 // you can also make with constant
const student2 ={
    name : "sher",
    age : 14,
    marks :98,
    city : "sher"
  };

  // post
  
  const post ={
    username : "dharmendra",
    content : "thise is my first post",
    like   : 111111111,
    reposts:122222222222,
    tags :"@meraproject @projecthub"

  };
  console.log(post);

//// boject ke under ka particular attribute kese print kare

console.log(post.content);
// or
console.log(post["content"]);


/// object keyword number ko as a string treat kart hai
 const obj={
    1:"a",
    2:"b",
    true:"c",
    null : "d",
    undefined : "e"
 };
obj[1]; ///    obj.1 ye wrong hoga number ke case me
 obj.undefined;
 obj["undefined"];

 //update and adding new attribute

 let student3 ={
    name : "dharmendra",
    age : 23,
    marks :94,
    city : "dewas"
  };

  student3.gender="male";// new added
   student3.marks ="99";//updated
   delete student3.age;


