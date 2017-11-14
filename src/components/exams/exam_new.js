import React, { Component , PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import { createExam } from "../../actions/index";
import { Link } from "react-router";

class ExamNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props){
        this.props.createExam(props)
            .then(() => {
                this.context.router.push('/');
            });
    }

    render() {
        const { fields: { title, description, create_by }, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h4>Create Exam.</h4>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/>
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>

                <div className={`form-group ${description.touched && description.invalid ? 'has-danger' : ''}`}>
                    <label>Description</label>
                    <input type="text" className="form-control" {...description}/>
                    <div className="text-help">
                        {description.touched ? description.error : ''}
                    </div>
                </div>

                <div className={`form-group ${create_by.touched && create_by.invalid ? 'has-danger' : ''}`}>
                    <label>Create By</label>
                    <input type="text" className="form-control" {...create_by}/>
                    <div className="text-help">
                        {create_by.touched ? create_by.error : ''}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate( values ) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a title.';
    }
    if (!values.description) {
        errors.description = 'Enter a description.';
    }
    if (!values.create_by) {
        errors.create_by = 'Enter a create by.';
    }
    return errors;
}

export default reduxForm({
    form: 'ExamNewForm',
    fields: [ 'title', 'description', 'create_by' ],
    validate
}, null, { createExam })(ExamNew);
