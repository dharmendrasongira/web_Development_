const  calculator = {
    nums:55,//property
    add: function(a,b){// method 
        return a+b;
    },
    sub :function(a,b){
        return a-b;
    },
    mul: function (a,b){
        return a*b;
    }
};

//use
calculator.add(1,2);


/// shortcut method 

const  calculator1 = {
    nums:55,//property
  
      add(a,b){// method shortcut
          return a+b;
      },
      sub (a,b){
          return a-b;
      },
      mul (a,b){
          return a*b;
      }
  };
  
  //use
calculator.add(1,2);