function factory(type){

    if ( type == "odd") {////usser ko odd pe true de esa function chaiye
 
        let odd =function(n){
        console.log(!n%2==0);// odd pe true even pe false
        };
        return odd;
    }
   
    else  if (type=="even"){//uusser ko even pe true de esa function chaiye

      let even =function(n){//logic
         console.log(n%2==0);}
         return even;
    }
    else {
        console.log("wrong request ");
    }
   
}
let request ="odd"// user request
let func =factory(odd);// 

func(10);

