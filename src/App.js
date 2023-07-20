import React from 'react';
import './App.css'
import {originals,action, trending,comedy,horror,documenteries,romance} from './urls'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';


function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={trending} title='Trending' isSmall/>
      <RowPost url={action} title='Action' isSmall/>

      <RowPost url={comedy} title='ComedyMovies' isSmall/>
      <RowPost url={horror} title='HorrorMovies' isSmall/>

      <RowPost url={romance} title='RomanceMovies' isSmall/>
      <RowPost url={documenteries} title='Documentaries' isSmall/>
      
    </div>
  );
}

export default App;
