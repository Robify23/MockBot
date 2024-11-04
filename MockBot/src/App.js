import React from 'react';
import './Components/Homepage.css';
import Home from './Pages/Home';
import Signup from './Components/Signup';
import Userpage from './Pages/Userpage';
import Selection from './Pages/loginSelection'
import Pdf from './Pages/Pdf';
import Ats from './Pages/Ats';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IQquizpage from './Pages/IQquizpage';
import EQquizpage from './Pages/EQquizpage';

function App() {
  return (
   
    <div className="App">
    
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/userpage" element={<Userpage />} />
          <Route path="/selection" element={<Selection/>}/>
          <Route path='/pdf' element={<Pdf/>}/>
          <Route path='/ats' element={<Ats/>}/>
          <Route path='/iqquiz' element={<IQquizpage/>}/>
          <Route path='/eqquiz' element={<EQquizpage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
