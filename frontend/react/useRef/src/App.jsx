import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [list,setlist] = useState([]);
   
  const addTodo = (Name, Date) => {
    setlist((curval)=>[...curval, {name:Name, date:Date}]
    );
  };

  const handleDelete = (name) => {
    const newList = list.filter(item => item.name!== name);
    setlist(newList);
  }
  return (
    <div className=" bg-green-100 h-screen">
      <AppName/>
      <AddTodo onNewItem={addTodo} />
      <div className=" text-left">
      {list.map((item, index) => <TodoItem key={index} name={item.name} date={item.date } onDeleteItem={handleDelete} /> )}
      { list.length == 0 && <WelcomeMessage> </WelcomeMessage>}
      </div>
      </div>
    
  );
}

export default App;
