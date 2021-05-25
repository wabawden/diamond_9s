import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form'
import { bindActionCreators } from 'redux';

import { addTileNote, addPositionNote } from './actions';

function NotesForm(props) {
    

    
    function renderLabel() {
        if (props.noteAttributes.type === "tile") {
            return `Add note for "${props.tiles.find(tile => tile.id === parseInt(props.noteAttributes.id)).text}"`
        }
        return `Add note at position ${props.tiles.find(tile => tile.position === parseInt(props.noteAttributes.id)).position}`
    }

    
    return (
      <Form
        onSubmit={values => {props.addTileNote(props.noteAttributes.id, props.noteAttributes.type, values)}}
        initialValues={{}}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} className="ui form">
            <div className="field">
              <label>{renderLabel()}</label>
              <Field
                name="text"
                component="textarea"
                type="text"
                placeholder="Type Note Here"
              />
            </div>
            <div className="buttons">
              <button type="submit">
                Submit
              </button>
            </div>
          </form>
        )}
      />
 
    );
}

const mapStateToProps = (state) => {
    return {
      tiles: state.activity.tiles,
      tileNotes: state.activity.tileNotes,
      positionNotes: state.activity.positionNotes
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addTileNote, addPositionNote }, dispatch);
};
  

export default connect(mapStateToProps, mapDispatchToProps)(NotesForm);
