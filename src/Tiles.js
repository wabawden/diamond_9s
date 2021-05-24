import './App.css';
import { useState } from 'react';
import { initialState } from './initialState';




function Tiles() {

    const [tiles, setTiles] = useState(initialState);
    const [selectedTile, setSelectedTile] = useState(null);
    
    function handleClick(event) {
        if (selectedTile) {
            let firstSelected = tiles.find(tile => tile.id === parseInt(selectedTile))
            let secondSelected = tiles.find(tile => tile.id === parseInt(event.target.id))
            firstSelected.position = parseInt(event.target.id);
            secondSelected.position = parseInt(selectedTile);
            tiles.splice((firstSelected.position - 1), 1, firstSelected)
            tiles.splice((secondSelected.position - 1), 1, secondSelected);
            setTiles(tiles);
            console.log(tiles);
            setSelectedTile(null);
            firstSelected = null;
            secondSelected = null;
        } else {
            document.getElementById(event.target.id).classList.toggle("selected");
            selectedTile === event.target.id ? setSelectedTile(null) : setSelectedTile(event.target.id);
            console.log(selectedTile);
        }
    };

  return (
    <div className="tiles">
        {tiles.map(tile => {
          const tile_id = tile.id; 
          return (
            <div className="tile" key={tile.id} id={tile_id} onClick={handleClick}>{tile.text}</div>
          );
      })};
    </div>
  );
}

export default Tiles;
