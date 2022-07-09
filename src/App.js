import React from 'react';
import Header from './containers/header/Header';
import Clients from './containers/clts/Clients';
import { BrowserRouter as Routes } from 'react-router-dom';
import Works from './containers/how_it_works/Works';
import Featured from './containers/featured_properties/Featured';
import Featured2 from './containers/featured_second/Featured2';
import NewsLetter from './containers/newsletter/NewsLetter';
const App = () => {
  return (
    <div>
      <Routes>
        <Header />
        <Clients />
        <Works />
        <Featured />
        <Featured2 />
        <NewsLetter />
      </Routes>
    </div>
  );
};

export default App;
