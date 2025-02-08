import {Routes,Route } from "react-router-dom"
import './App.css'
import Home from '../components/Home'

function App() {
  

  return (
    <div className="bg-[#1f1E24] w-screen h-screen">
    
  
<Routes>
   <Route path="/" element={<Home />} />
   </Routes>
   </div>
  )
}

export default App
