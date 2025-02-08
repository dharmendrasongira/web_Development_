import AddTodo from "./AddTodo";
import AppName from "./AppName";
import TodoItem1 from "./TodoItem1";
import TodoItem2 from "./TodoItem2";
function App() {
  return (
    <div className=" bg-zinc-400 h-screen">
      <AppName/>
      <AddTodo/>
      <div className=" text-left">
      <TodoItem1/>
      <TodoItem2/>
      </div>

    </div>
  );
}

export default App;
