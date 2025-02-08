/* eslint-disable react/prop-types */
import { useRef } from "react";

// import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";



function AddTodo({onNewItem}){
    //!ye itna sara code hum baccHA SKTE hai use ref ko use karke jab bhi input field me kuch enter
    //! karte  toh state ki wajah se  vo har word pe repaint ho jata tha but ab hub use ref ki help
    //! se jab chaye tab hi repaint karnege matlab jab hum pura likh chuke honge
    //*vo bhi bus teen chezz karke import karlo , cont name=useRef(name) or ref input box me de do
/*
    const [name, setName] = useState();
    const addName=(e)=>{
    setName(e.target.value);
    }

    const [Date, setDate] = useState();
    const addDate=(e)=>{
    setDate(e.target.value);
    }*/

    const nameRef= useRef();
    const DateRef= useRef();
    const handleNewItem=()=>{
       const name = nameRef.current.value;
       const Date = DateRef.current.value;
        nameRef.current.value="";
        DateRef.current.value="";
        onNewItem(name,Date);
        // setName("");
        // setDate("");
    }
    return (<div className="grid grid-cols-[2fr_2fr_1fr] gap-4">
        <div className="w-full p-4 text-left"><input type="text" /*! esa ref bhi likhna hoga */ref={nameRef}  /></div>
        <div className="w-full p-4 text-left"><input type="date"/*! esa ref bhi likhna hoga */ ref={DateRef} name="" id="" /></div>
        <div className=" p-4 text-left">
            <button  onClick={handleNewItem}  className="bg-blue-600 hover:bg-blue-700 text-white w-15 font-bold py-2 px-4 rounded"> <IoAddCircle />
</button></div>
      </div>)
} 
export default AddTodo;