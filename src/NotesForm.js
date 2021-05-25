import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form'
import { bindActionCreators } from 'redux';

import { addTileNote } from './actions';

function NotesForm(props) {
    

    
    function renderLabel() {
        if (props.noteAttributes.id) {
            return `Add note for "${props.tiles.find(tile => tile.id === parseInt(props.noteAttributes.id)).text}"`
        }
        return `Add note at position ${props.tiles.find(tile => tile.position === parseInt(props.noteAttributes.position)).position}`
    }

    console.log(props);
    return (
      <Form
        onSubmit={values => {props.addTileNote(props.noteAttributes.id, values)}}
        initialValues={{}}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} className="ui form">
            <div className="field">
              <label>{renderLabel()}</label>
              <Field
                name="note"
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
    return bindActionCreators({ addTileNote }, dispatch);
};
  

export default connect(mapStateToProps, mapDispatchToProps)(NotesForm);
