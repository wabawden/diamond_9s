import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import AddForm from './AddForm';
import { deleteNote, fetchState } from './actions';




function Notes(props) {

    function handleDelete (id, type, text) {
        props.deleteNote(id, type, text)
        props.fetchState();
    }

    function renderTileNotes() {
        console.log(props.notesView)
        console.log(props.tileNotes)
        if (props.tileNotes) {
            return props.tileNotes.map(tileNote => {
                if (tileNote.type === "tile" && tileNote.id === parseInt(props.notesView.id)) {
                    const noteClass = `tile-note note-${tileNote.id}`
                    return (
                        <div className={noteClass}>
                            {tileNote.text}
                            <i className="icon x icon" onClick={() => handleDelete(tileNote.id, tileNote.type, tileNote.text)}></i>
                        </div>
            
                    );
                    }
            });
        }
        return;
    }
    function renderPositionNotes() {
        console.log(props.notesView)
        if (props.tileNotes) {
            return props.tileNotes.map(tileNote => {
                if (tileNote.type === "position" && tileNote.id === parseInt(props.notesView.position)) {
                    return (
                        <div className="tile-note position-note">
                            {tileNote.text}
                            <i className="icon x icon"  onClick={() => handleDelete(tileNote.id, tileNote.type, tileNote.text)}></i>
                        </div>
            
                    );
                    }
            });
        }
        return;
    }
    
    // if (props.noteAttributes) {
    //     return (
    //         <div className="notes">
    //             <NotesForm noteAttributes={props.noteAttributes}/>
    //         </div>
    //         );
    // }
    

    if (props.notesView && props.tileNotes) {
        return (
            <div className="notes-test">
                <div className="notes-title">Notes for "{props.tiles.find(tile => tile.id === parseInt(props.notesView.id)).text}"</div>
                {renderTileNotes()}
                <AddForm type={"tile"} id={props.notesView.id}/>
                <div className="notes-title">Notes at this position</div>
                {renderPositionNotes()}
                <AddForm type={"position"} id={props.notesView.position}/>
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

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ deleteNote, fetchState }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
  