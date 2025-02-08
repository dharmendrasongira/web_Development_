import { useEffect } from "react";
import { useState } from "react";

function Time(){
  const [time,setTime] =useState(new Date());
  useEffect(()=>{
 const intervalId = setInterval(()=>setTime(new Date()),1000);
 return ()=> clearInterval(intervalId);  // cleanup function to clear interval when component unmounts.
  },[]);
   
return( 
   <p>This is the current time:{time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
)
}
export default Time;