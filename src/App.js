import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Thankyoupage from './Components/Thankyoupage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/thank-you" element={<Thankyoupage/>} /> 
      </Routes>
    </Router>
  );
};

export default App;