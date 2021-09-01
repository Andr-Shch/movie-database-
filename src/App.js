import React from 'react';
import Header from './components/header/Header.js';
import Home from './components/Home.js';

import { GlobalStyle } from './GlobalStyles';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Home/>
      Start here.
      <GlobalStyle/>
    </div>
  );
}
 


export default App;
