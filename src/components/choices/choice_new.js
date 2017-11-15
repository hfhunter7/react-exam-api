import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createChoice } from "../../actions/ChoiceAction";
import { Link } from "react-router";

class ChoiceNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit( props ) {
        props.question_id = this.props.params.questionId;
        this.props.createChoice(props)
            .then(() => {
                this.context.router.push('/question/' + props.question_id);
            });
    }

    render() {
        const { fields: { html, correct, question_id }, handleSubmit } = this.props;
        const questionId = this.props.params.questionId;

        return (
            <div>
                <h4>Create Choice.</h4>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className={`form-group`}>
                        <label>Question ID</label>
                        <input type="text" className="form-control" value={questionId}
                               disabled={true} {...question_id}/>
                    </div>

                    <div className={`form-group ${html.touched && html.invalid ? 'has-danger' : ''}`}>
                        <label>HTML</label>
                        <input type="text" className="form-control" {...html}/>
                        <div className="text-help">
                            {html.touched ? html.error : ''}
                        </div>
                    </div>

                    <div className={`form-group`}>
                        <label>Correct</label>
                        <select className="form-control" {...correct}>
                            <option value="false">False</option>
                            <option value="true">True</option>
                        </select>
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
    form: 'ChoiceNewForm',
    fields: [ 'html', 'correct', 'question_id' ],
    validate
}, null, { createChoice })(ChoiceNew);
