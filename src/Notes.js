import { connect } from 'react-redux';

import NotesForm from './NotesForm';
import notesReducer from './reducers/notesReducer';



function Notes(props) {
    function renderTileNotes() {
        console.log(props.notesView)
        return props.tileNotes.map(tileNote => {
            if (tileNote.type === "tile" && tileNote.id === parseInt(props.notesView.id)) {
                const noteClass = `tile-note note-${tileNote.id}`
                return (
                    <div className={noteClass}>{tileNote.text}</div>
        
                );
                }
          });
    }
    function renderPositionNotes() {
        console.log(props.notesView)
        return props.tileNotes.map(tileNote => {
            if (tileNote.type === "position" && tileNote.id === parseInt(props.notesView.position)) {
                return (
                    <div className="tile-note position-note">{tileNote.text}</div>
        
                );
                }
          });
    }
    
    if (props.noteAttributes) {
        return (
            <div className="notes">
                <NotesForm noteAttributes={props.noteAttributes}/>
            </div>
            );
    }
    

    if (props.notesView) {
        return (
            <div className="notes-test">
                <div className="notes-title">Notes for "{props.tiles.find(tile => tile.id === parseInt(props.notesView.id)).text}"</div>
                {renderTileNotes()}
                <div className="notes-title">Notes for this position</div>
                {renderPositionNotes()}
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
  