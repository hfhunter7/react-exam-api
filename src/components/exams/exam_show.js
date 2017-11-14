import React, { Component , PropTypes} from 'react';
import { connect } from 'react-redux';
import { fetchOneExam , deleteExam } from "../../actions/index";
import { Link } from "react-router";
import QuestionList from "../questions/question_list";

class ExamShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchOneExam(this.props.params.id);
    }

    onDeleteClick(){
        this.props.deleteExam(this.props.params.id)
            .then(() => {
                this.context.router.push('/');
            });
    }

    render() {
        const { exam } = this.props;

        if (!this.props.exam) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <Link to="/" className="btn btn-primary">Back to Index</Link>
                <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger pull-xs-right">Delete Exam</button>
                <h1>Exam {exam.id} Detail</h1>
                <h4>Title: {exam.title}</h4>
                <h5>Description: {exam.description}</h5>
                <h5>Create By: {exam.create_by}</h5>
                <hr width="100%"/>
                <QuestionList examId={exam.id}/>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return { exam: state.exams.exam };
}

export default connect(mapStateToProps, { fetchOneExam , deleteExam })(ExamShow);
