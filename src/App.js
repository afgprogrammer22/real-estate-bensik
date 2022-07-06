import React from 'react';
import Header from './containers/header/Header';
import Clients from './containers/clts/Clients';
import { BrowserRouter as Routes } from 'react-router-dom';
import Works from './containers/how_it_works/Works';
const App = () => {
  return (
    <div>
      <Routes>
        <Header />
        <Clients />
        <Works />
      </Routes>
    </div>
  );
};

export default App;
