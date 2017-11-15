import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExams } from "../../actions/index";
import { Link } from "react-router";

class ExamIndex extends Component {
    componentWillMount() {
        this.props.fetchExams();
    }

    renderExams() {
        return this.props.exams.map(( exam ) => {
            return (
                <li className="list-group-item" key={exam.id}>
                    <Link to={"exam/" + exam.id}>
                        <span className="pull-xs-right">{exam.title}</span>
                        <strong>Exam ID : {exam.id}</strong>
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/exam/new" className="btn btn-primary">Add Exam</Link>
                </div>
                <h4>List Exam.</h4>
                <ul className="list-group">
                    {this.renderExams()}
                </ul>
            </div>
        );
    }
}

// function mapDispatchToProps( dispatch ) {
//     return bindActionCreators({ fetchExams }, dispatch);
// }

function mapStateToProps( state ) {
    return { exams: state.exams.all };
}

export default connect(mapStateToProps, { fetchExams })(ExamIndex);