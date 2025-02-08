/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";


function AddTodo({onNewItem}){

    const [name, setName] = useState();
    const addName=(e)=>{
    setName(e.target.value);
    }

    const [Date, setDate] = useState();
    const addDate=(e)=>{
    setDate(e.target.value);
    }
    const handleNewItem=()=>{
        onNewItem(name,Date);
        setName("");
        setDate("");
    }
    return (<div className="grid grid-cols-[2fr_2fr_1fr] gap-4">
        <div className="w-full p-4 text-left"><input value={name} type="text" onChange={addName} /></div>
        <div className="w-full p-4 text-left"><input value={Date} type="date" name="" id="" onChange={addDate} /></div>
        <div className=" p-4 text-left">
            <button  onClick={handleNewItem}  className="bg-blue-600 hover:bg-blue-700 text-white w-15 font-bold py-2 px-4 rounded"> <IoAddCircle />
</button></div>
      </div>)
} 
export default AddTodo;