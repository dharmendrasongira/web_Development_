function TodoItem2()
{
    return(    <div className="grid grid-cols-[2fr_2fr_1fr] gap-4">
        <div className=" p-4 ">go to college</div>
        <div className=" p-4 ">14/12/25</div>
        <div className=" p-4 "><button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"> Delete
</button></div>
      </div>)
}
export default TodoItem2;