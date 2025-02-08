import { useContext } from "react";
import { TodoItemsContext } from "../store/Todo";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && (
      <p className="text-center mt-20 italic text-yellow-700 text-5xl">Enjoy your day!</p>
    )
  );
};

export default WelcomeMessage;
