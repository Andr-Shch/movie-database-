import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/header/Header.js';
import Home from './components/Home.js';
import Movie from './components/Movie.js';
import NotFound from './components/NotFound.js';

import { GlobalStyle } from './GlobalStyles';

function App() {
  return (
 <Router>
       <Header/>

       <Routes>
         <Route path='/'         element={ <Home/> } />
         <Route path='/:movieId' element={ <Movie/> } />
         <Route path='/*'        element={ <NotFound/> } />
       </Routes>

      
        Start here.
       <GlobalStyle/>
 </Router>
  );
}
 


export default App;
