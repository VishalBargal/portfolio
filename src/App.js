import './App.css';
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './component/home/Home';
import Landingpage from './component/home/Landingpage';
import My_Navbar from './component/Navbar/Nav';
import ScrollToTopButton from './component/ScrollToTopButton/ScrollToTopButton'


function App() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Home />}></Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
