import './App.css';
import { useState } from 'react';
import { initialState } from './initialState';




function Tiles() {

    const [tiles, setTiles] = useState(initialState);
    const [selectedTile, setSelectedTile] = useState(null);
    
    function handleClick(event) {
      console.log(selectedTile);
        // check that there is already a selected tile and it's not the same one being selected
        if (selectedTile && selectedTile !== event.target.value) {
            console.log("no selected tile");
            // establish first and second selected tiles
            let firstSelected = tiles.find(tile => tile.id === parseInt(selectedTile))
            let secondSelected = tiles.find(tile => tile.id === parseInt(event.target.id))
            //swap positions of the two selected tiles
            let firstSelectedPosition = firstSelected.position
            firstSelected.position = parseInt(secondSelected.position);
            secondSelected.position = parseInt(firstSelectedPosition);
            //splice new positions into state
            tiles.splice((firstSelected.position - 1), 1, firstSelected)
            tiles.splice((secondSelected.position - 1), 1, secondSelected);
            setTiles(tiles);
            //clean up
            setSelectedTile(null);
            document.getElementById(selectedTile).classList.remove("selected");
            firstSelected = null;
            secondSelected = null;
        } else {
            // no tile selected or tile selected and deselected
            document.getElementById(event.target.id).classList.toggle("selected");
            setTiles(tiles);
            setSelectedTile(event.target.id);
        }
    };

  return (
    <div className="tiles">
        {tiles.map(tile => {
          const tile_id = tile.id;
          const tile_class = `tile tile${tile.id}`;
          return (
            <div className={tile_class} key={tile.id} id={tile_id} onClick={handleClick}>
              {tile.text}
            </div>
          );
        })}
    </div>
  )
}

export default Tiles;
