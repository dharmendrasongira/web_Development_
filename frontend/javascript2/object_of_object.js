const classinfo={

    //object 1
    aman :{
    grade :"A",
    city:"indore"
    },

    //object 2
    shradha :{
        grade: "A",
        city :"pune"
    },
    karan:{
        grade:"c",
        city :"mumbai"
    }
};
// sare object
console.log(classinfo);

// indivisual object ko bhi access kar skte
console.log(classinfo.karan);


classinfo.aman.name =" gagan"


// indivisual object ki indivisual property  ko bhi access kar skte
console.log(classinfo.karan.city);