import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Formik, Field, Form } from 'formik';
import { addTileNote } from './actions';

const AddForm = (props) => {
    const placeholder = props.type === "tile" ? "Add a new note.." : "Add a new note at this position.."
    
    return (
        <div>
            <Formik
            initialValues={{
                content: '',
            }}
            onSubmit={(values, { resetForm } ) => {
                if (values.content) {
                    props.addTileNote(props.id, props.type, values.content);
                    resetForm();
                }
            }}
            >
            <Form className="ui form">
                <div className="field">
                    <Field id="content" name="content" component="textarea" rows="3" placeholder={placeholder} />
                </div>
                <button className="ui button primary" type="submit">+</button>
            </Form>
            </Formik>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
      tiles: state.activity.tiles,
      tileNotes: state.activity.tileNotes
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addTileNote }, dispatch);
};
  

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);