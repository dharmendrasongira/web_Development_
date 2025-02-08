import FoodItems from './components/FoodItems';
import FoodInput from './components/FoodInput';
import ErrorMessage from './components/ErrorMessage';

import './App.css';
import Container from './components/Container'
import { useState } from 'react';

const Food = ["milk", "bread", "banana", "orange", "apple", "grapes", "cherry", "peach", "watermelon", "mango", "strawberry"];

function App() {



  //*state ka use karte hai ab hum
  let textStateArr = useState("food item entered by user" /* intial state yaha likh sakhte hai yaha pe*/);

  //& yaha use state use karnege
  //&import karna jaruri hai
  //~ ab jab bhi usesatate declare karte hai  vo hume array retrun karta hai
  //~jisme  do element hote hai jo phela element hota hai vo current state hai or dusra elemet ek method hoti hai jo use value ko 
  //~change karne ke liye karne ke liye hoti hai
  
  let textStateVal = textStateArr[0]; //**  jo current value vo */
  let setTextState = textStateArr[1]; //**  method uss value ko change karne ke liye */




//!upper ki teen line ko dstruture karke ek line me bhi likh skte hai
//* [textToShow, setTextState] = useState(" Food Item Entered by user");




  const handleChange = (event) => {

    //! textToShow=event.target.value; // hum uske niche change ho vo textToShow mei store kar dega but 
    //!value change ho rahi hai textTOshow ki but jo intailly value hi show kar rah hai kyuki repaint nahi hor raha hai
    //!or agar hum repaint karne bhi lage tab bhi value jo intaillly di thi vo ajyegi 
    
  
    setTextState(event.target.value); //✅ Sahi tarika (state update hoga, repaint bhi hoga)

    console.log(event.target.value);
  };

  return (
    <Container>
      <h1 className=" font-extrabold mt-10 text-2xl">Healthy Food</h1>
      <FoodInput handleChange={handleChange}></FoodInput>
      <p>{textStateVal}</p>   {/* 
      ab hum chate hai ki ho hum input box mei change ho vo uske nichhe show ho jaye but ye normally possible
      nahi kyuki  rect me jo intaillly value denge vo repaint nahi hoti toh hum state use karnege isliye hum
      hoook state ka use karnege jo value ko update kanrpe repaint kar denga vo jagha */}

      <FoodItems items={Food} />
      <ErrorMessage items={Food} />
    </Container>
  );
}

export default App;
