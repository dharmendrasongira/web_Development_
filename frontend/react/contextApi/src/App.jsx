import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems"; // Fixed incorrect import
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/Todo"; // Ensure correct import

function App() {
  const [todoItems, setTodoItems] = useState([]);

  // Function to add a new item
  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate }
    ];
    setTodoItems(newTodoItems);
  };

  // Function to delete an item
  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      <div className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </div>
    </TodoItemsContext.Provider>
  );
}

export default App;
