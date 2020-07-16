import React from 'react';
import Home from './Components/Home'
import Men from './Components/Men'
import {Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <Link to='/'>go to home</Link>
      <Link to='men'>go to men</Link>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='men' element={<Men />} />      </Routes>
    </div>
  );
}

export default App;
