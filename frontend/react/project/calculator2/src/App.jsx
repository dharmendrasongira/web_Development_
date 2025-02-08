import styles from "./App.module.css";
import Display from "./components/display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";


function App() {
const [calval,setCalval] =useState("");

const onButtonClick = (buttonName) => {
  if(buttonName === "="){
   const result = eval(calval);
   setCalval(result);
  }
  else if(buttonName === "C"){
    setCalval("");
  }
  else{
 const newval=calval+ buttonName; 
 setCalval(newval);
  }}

  return (
    <div className={styles.calculator} id ="calculator" >
      <Display displayValue={calval} />
      <ButtonContainer onButtonClick={onButtonClick}  ></ButtonContainer>
    </div>
   
  );
  
}
export default App;
