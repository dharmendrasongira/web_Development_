const student={
    name: "Dharmendra",
    age :18,
    Math: 99,
    eng:98,
    phy:100,

    get avg(){
        //this keyword use hota hai esi object ke attribute paane ke liye 
        
        let avg = (this.Math + this.eng + this.phy)/3;
        console.log(avg);

        //this print karne pe ye jis object ke under hai uski sare attribute value print kar dega

        console.log(this);
    }
}

// agar is ko bina kisi object ke under function  me this use kiya toh window object call karlega
 function cool(){
    
    console.log(this);

 }