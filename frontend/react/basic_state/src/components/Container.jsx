/* eslint-disable react/prop-types
*/
/* ye props ka advance version hai jisme hum children 
 pass karte hai taki output me aajaye children pass kar sakte hai */
 import styles from './Container.module.css';
 const Container = (props)=>{
 
    return <div className={styles.container}>{props.children}</div>
}
export default Container;