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
    <div className="App">
      <Router>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<ContactUs />}></Route>
      </Router>
    </div>
  );
}

export default App;
