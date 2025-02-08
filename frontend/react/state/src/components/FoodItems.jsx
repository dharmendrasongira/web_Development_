/* eslint-disable react/prop-types */
import styles from "./FoodItems.module.css"
import { useState } from "react";

const FoodItems = ({ items }) => {

  const [boughtItems, setBoughtItems] = useState([]);

   const handleBuy=(item)=>{
    let newBoughtItems=[...boughtItems, item];
    setBoughtItems(newBoughtItems);
   }

  return (

    <ul className={styles.foodlist}>
      {items.map((item, index) => (
        <li key={index}  className={`${styles.foodItem} ${boughtItems.includes(item) ? styles.bought : ""}`}>
          <span className={styles.foodName}>{item}</span>
          <button onClick={() => handleBuy(item)} className={styles.buyButton}>Buy</button>
        </li>
      ))}
    </ul>
  );
};

export default FoodItems;
