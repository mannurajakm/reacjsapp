import logo from './logo.svg';
import './App.css';
import  Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Navbar />
      </Router>
   </>
  );
}

export default App;
