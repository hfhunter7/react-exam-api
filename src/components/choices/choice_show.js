import React, { Component , PropTypes } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router";
import { fetchChoice } from "../../actions/ChoiceAction";

class ChoiceShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchChoice(this.props.params.id);
    }

    render() {
        const { choice } = this.props;
        console.log(choice);
        if(!this.props.choice){
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Link to="/" className="btn btn-primary">Back to Index</Link>
                <button className="btn btn-danger pull-xs-right">Delete Choice</button>
                <hr width={"100%"} />
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

export default connect(mapStateToProps, { fetchChoice })(ChoiceShow);