import style from './Main.module.css'

function Main() {
    const foodItems = ["milk", "bread", "banana", "orange", "apple", "grapes", "cherry", "peach", "watermelon", "mango", "strawberry"];
    
    return (
      <>
       <h1 className={style.heading}>Healthy Food</h1>
        <ul className={style.content} >
          {foodItems.map((item, index) => (
            <li key={index} className="capitalize text-lg">
              {item}
            </li>
          ))}
        </ul>
      </>
    );
  }
  
  export default Main;
  