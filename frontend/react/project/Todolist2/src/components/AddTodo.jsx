function AddTodo(){
    return (<div className="grid grid-cols-[2fr_2fr_1fr] gap-4">
        <div className="w-full p-4 text-left"><input type="text" /></div>
        <div className="w-full p-4 text-left"><input type="date" name="" id="" /></div>
        <div className=" p-4 text-left"><button className="bg-blue-600 hover:bg-blue-700 text-white w-20 font-bold py-2 px-4 rounded"> Add
</button></div>
      </div>)
} 
export default AddTodo;