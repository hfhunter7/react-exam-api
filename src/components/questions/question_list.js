import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from "../../actions/QuestionAction";
import { Link } from "react-router";

class QuestionList extends Component {
    componentWillMount() {
        this.props.fetchQuestions();
    }

    renderQuestions( examId ) {
        return this.props.questions.map(( question ) => {
            if (question.exam_id === examId) {
                return (
                    <li className="list-group-item" key={question.id}>
                        <Link to={"/question/" + question.id}>
                            <span className="pull-xs-right">{question.html}</span>
                            <strong>No : {question.id}</strong>
                        </Link>
                    </li>
                );
            }
        });
    }

    render() {
        const { examId } = this.props;
        return (
            <div>
                <Link to={"/question/new/" + examId} className="btn btn-primary pull-xs-right">Add Question</Link>
                <h3>List Question.</h3>
                <ul className="list-group">
                    {this.renderQuestions(examId)}
                </ul>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return { questions: state.questions.all };
}

export default connect(mapStateToProps, { fetchQuestions })(QuestionList);
