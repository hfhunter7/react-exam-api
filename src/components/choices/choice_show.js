import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router";
import { fetchChoice, deleteChoice } from "../../actions/ChoiceAction";

class ChoiceShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchChoice(this.props.params.id);
    }

    onDeleteClick()
    {
        this.props.deleteChoice(this.props.params.id)
            .then(() => {
                this.context.router.push('/');
            });
    }

    render() {
        const { choice } = this.props;

        if (!this.props.choice) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Link to="/" className="btn btn-primary">Back to Index</Link>
                <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger pull-xs-right">Delete Choice
                </button>
                <hr width={"100%"}/>
                <h4>Question ID : {choice.question_id}</h4>
                <h3>Choice ID : {choice.id}</h3>
                <h3>HTML : {choice.html}</h3>
                <h3>Correct : {choice.isCorrect ? 'True' : 'False'}</h3>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return { choice: state.choices.choice };
}

export default connect(mapStateToProps, { fetchChoice, deleteChoice })(ChoiceShow);