import { useContext } from "react";
import { TodoItemsContext } from "../store/Todo";
import TodoItem from "./TodoItem";

const TodoItems = () => {
  const { todoItems, deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="bg-pink-200">
      {todoItems.map((item, index) => (
        <TodoItem key={index} name={item.name} dueDate={item.dueDate} onDeleteItem={deleteItem} />
      ))}
    </div>
  );
};

export default TodoItems;
