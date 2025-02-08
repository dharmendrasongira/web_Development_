import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";

function App() {
  const list = [{ name :"buy milk",
    date: "4/11/25"  }, {
      name: "buy groceries",
    date: "4/13/25"  }
  , {
   name: "do exercise",
   date: "5/11/25" 
  } ];
  return (
    <div className=" bg-zinc-400 h-screen">
      <AppName/>
      <AddTodo/>
      <div className=" text-left">
      {list.map((item, index) => <TodoItem key={index} name={item.name} date={item.date}/> )}
      </div>
      </div>
     
  );
}

export default App;
