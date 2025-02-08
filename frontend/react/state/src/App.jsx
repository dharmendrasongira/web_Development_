import FoodItems from './components/FoodItems';
import FoodInput from './components/FoodInput';
import ErrorMessage from './components/ErrorMessage';

import './App.css';
import Container from './components/Container';
import { useState } from 'react';

function App() {
  let [Food, setFood] = useState([
    "milk",
    "bread",
    "banana",
    "orange"
  ]);

  const onKeydown = (event) => {
    if (event.key === "Enter") {
      let newItem = event.target.value;
      let newFood = [...Food, newItem];
      setFood(newFood);
      event.target.value = ""; // ✅ Yeh line input box clear kar degi
    }
  }; // ✅ Yahan closing bracket missing thi, fix kar diya

  return (
    <Container>
      <h1 className="font-extrabold mt-10 text-2xl">Healthy Food</h1>
      <FoodInput handleKeyDown={onKeydown} /> {/* ✅ Check kar ki tere `FoodInput` mein yahi prop use ho */}
      <FoodItems items={Food} />
      <ErrorMessage items={Food} />
    </Container>
  );
}

export default App;
