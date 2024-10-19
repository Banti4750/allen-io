import React from 'react';
import Navbar from './Navbar';

import Fotter from './components/Fotter';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import NeetLanding from './NeetLanding';
import Neetpage from './NeetPage/Neetpage';
import JeePage from './JeePage/JeePage';
import Error from './Error/Error';

const App = () => {
  return (
    <div style={{ backgroundColor: '#0f1825' }}>
      <Navbar />
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NeetLanding />} />
          <Route path="/neet" element={<Neetpage />} />
          <Route path="/jee" element={<JeePage/>} />

          <Route path="*" element={<Error/>} />
        </Routes>

      </BrowserRouter>
      <Fotter />

    </div>
  );
}

export default App;