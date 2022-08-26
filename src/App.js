import './App.css';

import Home from './components/Home';
import ContactUs from './components/ContactUs';
import About from './components/About';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      
      <ul className="App-header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<ContactUs />}></Route>
        </Routes>
      
    </div>
    </Router>
  );
}

export default App;
