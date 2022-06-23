import React from 'react';
import Header from './containers/header/Header';
import { BrowserRouter as Routes } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Routes>
        <Header />
      </Routes>
    </div>
  );
};

export default App;
