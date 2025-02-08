/* eslint-disable react/prop-types */
import styles from "./FoodInput.module.css";
const FoodInput =({handleKeyDown})=>{
   

return(
    <input
    onKeyDown={handleKeyDown}  
    className={styles.ok} type="text" />
)

}
export default FoodInput;