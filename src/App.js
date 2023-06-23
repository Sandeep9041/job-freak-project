import { BrowserRouter as Router,  Routes, Route,  } from 'react-router-dom';
import Home from "./Components/Home/home"
import Contact from "./Components/Contact/contact"
import Information from "./Components/Information/information"
import Guide from "./Components/Guide/guide"

import './App.css';

const App = () => {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home/>} exact />
    <Route path="/guide" element={<Guide/>} exact />
    <Route path="/contact" element={<Contact/>} exact />
    <Route path="/information" element={<Information/>} exact />
    </Routes>
    </Router>
  );
}

export default App;
