import { useEffect } from 'react';

import { fetchTileActivity } from './actions';
import Tiles from './Tiles';
import Question from './Question';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="left-menu"><Question /></div>
      <div className="center"><Tiles /></div>
    </div>
  )
}

export default App;
