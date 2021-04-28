import React from 'react';
import CategoriesSec from './homePage/CategoriesSec';
import Nav from './homePage/Nav';
import Home from './homePage/Home';
import '../src/styles/main.scss';
import SmartWatch from './recommended/SmartWatch';
import Ads from './ads/Ads';
import NewCollec from './newcollection/NewCollec';

function App() {
  return (
    <>
      <Nav />
      <CategoriesSec />
      <Home />
      <SmartWatch />
      <Ads />
      <NewCollec />
    </>
  );
}

export default App;
