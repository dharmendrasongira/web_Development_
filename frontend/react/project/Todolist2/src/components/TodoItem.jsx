/* eslint-disable react/prop-types */
function TodoItem1({name,date})
{
    return(  <div className="grid grid-cols-[2fr_2fr_1fr] gap-4">
        <div className=" p-4 ">{name}</div>
        <div className=" p-4">{date}</div>
        <div className=" p-4 "><button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"> Delete
</button></div>
      </div>)
}
export default TodoItem1;