import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import { Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
      </Routes>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
