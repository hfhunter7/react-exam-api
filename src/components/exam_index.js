import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExams } from "../actions/index";
import { Link } from "react-router";

class ExamIndex extends Component {
    componentWillMount() {
        this.props.fetchExams();
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/exam/new" className="btn btn-primary">Add Exam</Link>
                </div>
                <h4>List Exam.</h4>
            </div>
        );
    }
}

// function mapDispatchToProps( dispatch ) {
//     return bindActionCreators({ fetchExams }, dispatch);
// }

export default connect(null, { fetchExams })(ExamIndex);