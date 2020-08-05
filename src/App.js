import React from 'react';
import './App.css';
import Newsfeed from './container/Newsfeed/Newsfeed'
import SearchBox from './container/SearchBox/SearchBox'
function App() {
  return (
    <div className="App">
     <SearchBox />
      <Newsfeed />
    </div>
  );
}

export default App;
