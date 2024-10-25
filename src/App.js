import React from 'react';
import './Components/Homepage.css';
import Home from './Pages/Home';
import Signup from './Components/Signup';
import Userpage from './Pages/Userpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* Use BrowserRouter instead of Router */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/userpage" element={<Userpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
