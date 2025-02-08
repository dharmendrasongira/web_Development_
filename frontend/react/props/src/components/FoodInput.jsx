/* eslint-disable react/prop-types */
import styles from "./FoodInput.module.css";
const FoodInput =({handleChange})=>{
   

return(
    <input
    onChange={handleChange}  
    className={styles.ok} type="text" />
)

}
export default FoodInput;