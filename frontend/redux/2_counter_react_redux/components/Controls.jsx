import { useRef } from "react";
import { useDispatch } from "react-redux";

const Control= ()=>{
    const inputref = useRef();
    const dispatch =  useDispatch();
    const increment = () => dispatch({type: 'INCREMENT'});
    const decrement = () => dispatch({type: 'DECREMENT'});
    const handleAdd = () => {dispatch({type: 'ADD', payload:{number: inputref.current.value,} });
    inputref.current.value=" ";}
    const handleSub = () => {dispatch({type: 'SUB', payload:{number: inputref.current.value,} });
    inputref.current.value=" ";}
    const handlePrivacyToggle = () => dispatch({type: 'TOGGLE_PRIVACY'});
 return(
<>
<div> 
    <div className="d-grid mb-5 gap-2 d-sm-flex justify-content-sm-center">
    <button type="button" onClick={handlePrivacyToggle} className="btn btn-outline-danger btn-lg px-4">Privacy Toggle</button>
        <button type="button" onClick={increment} className="btn btn-success btn-lg px-4 gap-3">+1</button>
        <button type="button" onClick={decrement} className="btn btn-outline-danger btn-lg px-4">-1</button>
      </div>
      <div className="input-group input-group-sm mb-3">
  <div className="input-group-prepend"></div>
  <input type="text"ref={inputref} className="form-control " aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
  <button type="button" onClick={handleAdd} className="btn btn-success btn-lg px-4 gap-3 ml-4">ADD</button>
  <button type="button" onClick={handleSub} className="btn btn-outline-danger btn-lg px-4">Substract</button>
</div>
      </div>
</>
 )
}
export default Control;