import FoodItems from './components/FoodItems';
import FoodInput from './components/FoodInput';
import ErrorMessage from './components/ErrorMessage';

import './App.css';
import Container from './components/Container'

const Food = ["milk", "bread", "banana", "orange", "apple", "grapes", "cherry", "peach", "watermelon", "mango", "strawberry"];
const handleChange=(event)=>{
  console.log(event.target.value);
};

function App() {
  return (
    <Container>
      <h1 className=" font-extrabold mt-10 text-2xl">Healthy Food</h1>
      <FoodInput handleChange={handleChange}></FoodInput>
      <FoodItems items={Food} />
      <ErrorMessage items={Food} />
      </Container>
  );
}

export default App;
