import styles from "./App.module.css";
import Display from "./components/display";
import ButtonContainer from "./components/ButtonContainer";
function App() {

  return (
    <div className={styles.calculator} id ="calculator" >
      <Display />
      <ButtonContainer></ButtonContainer>
    </div>
   
  );
  
}
export default App;
