import { useReducer } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/Todo";

const todoItemsReducer = (currTodoItems, action) => {
  // Added let to initialize newTodoItem
  let newTodoItem = currTodoItems;  // Fixed scoping of newTodoItem

  if (action.type === "ADD_TODO") {
    newTodoItem = [
      ...currTodoItems,
      {
        name: action.payload.name,
        dueDate: action.payload.dueDate,
      },
    ];
  } else if (action.type === "DELETE_TODO") {
    newTodoItem = currTodoItems.filter((item) => item.name !== action.payload.name);
  } else {
    return currTodoItems;  // Added return to ensure default state is returned if action doesn't match
  }

  return newTodoItem;  // Returning updated state
};

function App() {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "ADD_TODO",
      payload: { name: itemName, dueDate: itemDueDate },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_TODO",
      payload: { name: todoItemName },
    };
    dispatchTodoItems(deleteItemAction);
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
