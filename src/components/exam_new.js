import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createExam } from "../actions/index";

class ExamNew extends Component {
    render() {
        const { fields: { title, description, create_by }, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.props.createExam)}>
                <h4>Create Exam.</h4>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/>
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input type="text" className="form-control" {...description}/>
                </div>

                <div className="form-group">
                    <label>Create By</label>
                    <input type="text" className="form-control" {...create_by}/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'ExamNewForm',
    fields: [ 'title', 'description', 'create_by' ]
}, null, { createExam })(ExamNew);
