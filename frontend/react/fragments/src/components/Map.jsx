

function App() {
  const foodItems = ["milk", "bread", "banana", "orange", "apple", "grapes", "cherry", "peach", "watermelon", "mango", "strawberry"];
  
  return (
    <>
      <h1 className="text-center font-extrabold mt-10 text-2xl">Healthy Food</h1>
      <ul className="text-center mt-4 list-disc list-inside">
        {foodItems.map((item, index) => (
          <li key={index} className="capitalize text-lg">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
