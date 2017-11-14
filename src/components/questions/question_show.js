import React, { Component, PropTypes } from 'react';
import { fetchQuestion , deleteQuestion} from "../../actions/QuestionAction";
import { connect } from "react-redux";

class QuestionShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchQuestion(this.props.params.id);
    }

    onDeleteClick(){
        this.props.deleteQuestion(this.props.params.id)
            .then(() => {
                this.context.router.push('/');
            });
    }

    render() {
        const { question } = this.props;

        if(!this.props.question){
            return <div>Loading...</div>;
        }
        return (
            <div>
                <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger pull-xs-right">Delete Question</button>
                <h3>Question {this.props.params.id}</h3>
                <hr width={"100%"} />
                <h4>Exam ID : {question.exam_id}</h4>
                <h4>Question ID : {question.id}</h4>
                <h4>HTML : {question.html}</h4>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return { question: state.questions.question };
}

export default connect(mapStateToProps, { fetchQuestion ,deleteQuestion })(QuestionShow);
