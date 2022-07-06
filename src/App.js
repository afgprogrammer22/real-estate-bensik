import React from 'react';
import Header from './containers/header/Header';
import Clients from './containers/clts/Clients';
import { BrowserRouter as Routes } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Routes>
        <Header />
        <Clients />
      </Routes>
    </div>
  );
};

export default App;
