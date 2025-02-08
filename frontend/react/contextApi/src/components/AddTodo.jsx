import { useContext, useRef } from "react";
import { IoAddCircle } from "react-icons/io5";
import { TodoItemsContext } from "../store/Todo";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);

  const nameRef = useRef();
  const dateRef = useRef();

  const handleNewItem = () => {
    const name = nameRef.current.value;
    const dueDate = dateRef.current.value;

    if (!name || !dueDate) return; // Prevent empty inputs

    nameRef.current.value = "";
    dateRef.current.value = "";
    addNewItem(name, dueDate);
  };

  return (
    <div className="bg-slate-600 grid grid-cols-[2fr_2fr_1fr] gap-4">
      <input type="text" ref={nameRef} className="p-4" placeholder="Enter task" />
      <input type="date" ref={dateRef} className="p-4" />
      <button onClick={handleNewItem} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <IoAddCircle />
      </button>
    </div>
  );
}

export default AddTodo;
