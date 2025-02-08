/* eslint-disable react/prop-types */
import styles from "./FoodItems.module.css"

const FoodItems = ({ items }) => {
  return (
    <ul className={styles.foodlist}>
      {items.map((item, index) => (
        <li key={index} className={styles.foodItem}>
          <span className={styles.foodName}>{item}</span>
          <button onClick={ console.log(`${items} is bought`)} className={styles.buyButton}>Buy</button>
        </li>
      ))}
    </ul>
  );
};

export default FoodItems;
