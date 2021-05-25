import { connect } from 'react-redux';

import NotesForm from './NotesForm';
import notesReducer from './reducers/notesReducer';



function Notes(props) {
    function renderTileNotes() {
        return props.tileNotes.map(tileNote => {
            if (tileNote.id === parseInt(props.selectedTile)) {
                const noteClass = `tile-note note-${tileNote.id}`
                return (
                    <div className={noteClass}>{tileNote.note}</div>
        
                );
                }
          });
    }
    if (props.noteAttributes) {
        return (
            <div className="notes">
                <NotesForm noteAttributes={props.noteAttributes}/>
                {renderTileNotes()}
            </div>
            );
    }
    

    if (props.selectedTile) {
        return (
            <div>
                <div className="notes-title">Notes for "{props.tiles.find(tile => tile.id === parseInt(props.selectedTile)).text}"</div>
                {renderTileNotes()}
            </div>
            );
        }
    return null

}

const mapStateToProps = (state) => {
    return {
      tiles: state.activity.tiles,
      tileNotes: state.notes,
      positionNotes: state.positionNotes
    };
  };
  
  export default connect(mapStateToProps)(Notes);
  