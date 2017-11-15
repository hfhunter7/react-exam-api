import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createQuestion } from "../../actions/QuestionAction";
import { Link } from "react-router";

class QuestionNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props){
        props.exam_id = this.props.params.examId;
        this.props.createQuestion(props)
            .then(() => {
                this.context.router.push('/exam/' + props.exam_id);
            });
    }

    render() {
        const { fields: { html , exam_id}, handleSubmit } = this.props;
        const examId = this.props.params.examId;
        return (
            <div>
                <h4>Create Question.</h4>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className={`form-group`}>
                        <label>Exam ID</label>
                        <input type="text" className="form-control" value={examId} disabled={true} {...exam_id}/>
                    </div>

                    <div className={`form-group ${html.touched && html.invalid ? 'has-danger' : ''}`}>
                        <label>HTML</label>
                        <input type="text" className="form-control" {...html}/>
                        <div className="text-help">
                            {html.touched ? html.error : ''}
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                </form>
            </div>
        );
    }
}

function validate( values ) {
    const errors = {};

    if (!values.html) {
        errors.html = 'Enter a html.';
    }
    return errors;
}

export default reduxForm({
    form: 'QuestionNewForm',
    fields: [ 'html', 'exam_id' ],
    validate
}, null, { createQuestion })(QuestionNew);
