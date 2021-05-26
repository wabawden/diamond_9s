import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTileActivity } from './actions'
import { tileActivity as activity }  from './initialState';
import Notes from './Notes';

function Tiles(props) {

    const [tileActivity, setTileActivity] = useState(activity);
    const [selectedTile, setSelectedTile] = useState(null);
    const [noteAttributes, setNoteAttributes] = useState(null);
    const [notesView, setNotesView] = useState(null)

    useEffect(() => {
      props.fetchTileActivity();
    }, []);
    
    function handleClick(event) {
      console.log(selectedTile);
        // check that there is already a selected tile and it's not the same one being selected
        if (selectedTile && selectedTile !== event.target.value) {
            // establish first and second selected tiles
            let firstSelected = tileActivity.tiles.find(tile => tile.id === parseInt(selectedTile))
            let secondSelected = tileActivity.tiles.find(tile => tile.id === parseInt(event.target.id))
            //swap positions of the two selected tiles
            let firstSelectedPosition = firstSelected.position
            firstSelected.position = parseInt(secondSelected.position);
            secondSelected.position = parseInt(firstSelectedPosition);
            //splice new positions into state
            tileActivity.tiles.splice((firstSelected.position - 1), 1, firstSelected)
            tileActivity.tiles.splice((secondSelected.position - 1), 1, secondSelected);
            setTileActivity(tileActivity);
            //clean up
            setSelectedTile(null);
            document.getElementById(selectedTile).classList.remove("selected");
            firstSelected = null;
            secondSelected = null;
        } else {
            // no tile selected or tile selected and deselected
            document.getElementById(event.target.id).classList.toggle("selected");
            setTileActivity(tileActivity);
            setSelectedTile(event.target.id);
        }
    };

    function handleDropDown(event) {
      event.stopPropagation()
      event.target.nextElementSibling.classList.toggle("menu-hidden")
    }

    function cleanUp(event) {
      setNoteAttributes(null);
      setNotesView(null);
    }

    //TODO: hide eye icon when there are no notes to display

  return (
    <>
      <div className="workspace" onClick={cleanUp}>
        <div>{tileActivity.question.highLabel}</div>
        <div className="tiles">
            {tileActivity.tiles.map(tile => {
              const tile_id = tile.id;
              const tile_class = `tile tile${tile.id}`;
              const dropdownId = `dropdown-${tile.id}`;
              return (
                <div className={tile_class} key={tile.id} id={tile_id} onClick={handleClick}>
                  <div onClick={(e)=>e.stopPropagation()}>
                    <i className="icon eye" onClick={()=> setNotesView({position: tile.position, id: tile.id})}></i>
                  </div>
                  <div className="notes-icon" onClick={(e) => e.stopPropagation()}>  
                    <i className="icon edit" onClick={handleDropDown}></i>
                    <div id={dropdownId} className="menu-hidden" onClick={(e)=>e.stopPropagation()}>
                      <div className="add-tile-note"
                            onClick={()=> setNoteAttributes({type: "tile", id: tile.id})}>Add note to tile</div>
                      <div className="add-position-note"
                            onClick={()=> setNoteAttributes({type: "position", id: tile.position})}>Add note to position</div>
                    </div>
                  </div>
                  {tile.text}
                </div>
              );
            })}
        </div>
        <div>{tileActivity.question.lowLabel}</div>
      </div>
      <Notes noteAttributes={noteAttributes} selectedTile={selectedTile} notesView={notesView}/>
    </>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    tileActivity: state.activity,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchTileActivity }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Tiles);
