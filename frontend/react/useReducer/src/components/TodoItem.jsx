/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";

function TodoItem({ name, dueDate, onDeleteItem }) {
  return (
    <div className="grid grid-cols-[2fr_2fr_1fr] gap-4 p-4 border-b border-pink-400">
      <div>{name}</div>
      <div>{dueDate}</div>
      <button onClick={() => onDeleteItem(name)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        <MdDelete />
      </button>
    </div>
  );
}

export default TodoItem;
