import React, { Component, PropTypes } from 'react';
import { fetchQuestion , deleteQuestion} from "../../actions/QuestionAction";
import { connect } from "react-redux";
import { Link } from "react-router";
import ChoiceList from "../choices/choice_list";

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
                <Link to="/" className="btn btn-primary">Back to Index</Link>
                <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger pull-xs-right">Delete Question</button>
                <hr width={"100%"} />
                <h4>Exam ID : {question.exam_id}</h4>
                <h4>Question ID : {question.id}</h4>
                <h4>HTML : {question.html}</h4>
                <hr width="100%"/>
                <ChoiceList questionId={question.id}/>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return { question: state.questions.question };
}

export default connect(mapStateToProps, { fetchQuestion ,deleteQuestion })(QuestionShow);
