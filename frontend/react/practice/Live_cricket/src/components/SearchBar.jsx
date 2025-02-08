/* eslint-disable react/prop-types */
import { useRef } from "react";
const SearchBar =({setSearch})=>{
   
    const searchref =useRef();
    
    const handleSearch = ()=>{
       const search =searchref.current.value;
       setSearch(search);
    }

    return(
        <center>
                    <div className="searchBar ">
                        <input type="text" className="mt-5 text-center w-80 rounded-md mr-8" ref={searchref} placeholder="search matches  "/>
                        <button className="btn  rounded-lg w-24 bg-lime-400" onClick={handleSearch}  >search</button>
                    <div className="mt-5 ml-4 heading flex justify-center">
                        <div className="bg-red-700 h-6 w-6 rounded-full"></div>
                        <h1 className="pl-4 text-xl text-neutral-100">Live Cricket Score</h1>
                    </div>
                    </div> 
        </center>
    )
}
export default SearchBar;