import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home/>} />
    </Routes>

  </Router>
  );
}

export default App
