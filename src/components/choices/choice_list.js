import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchChoices } from '../../actions/ChoiceAction';

class ChoiceList extends Component {
    componentWillMount() {
        this.props.fetchChoices();
    }

    renderChoices( questionId ) {
        return this.props.choices.map(( choice ) => {
            if (questionId === choice.question_id) {
                return (
                    <li className={"list-group-item"} key={choice.id}>
                        <Link to={"/choice/" + choice.id}>
                            <span className={"pull-xs-right"}>{choice.html}</span>
                            <strong>Choice NO: {choice.id}</strong>
                        </Link>
                    </li>
                );
            }
        });
    }

    render() {
        const { questionId } = this.props;
        return (
            <div>
                <Link to={"/choice/new/" + questionId} className="btn btn-primary pull-xs-right">Add Choice</Link>
                <h3>List Choice.</h3>
                <ul className={"list-group"}>
                    {this.renderChoices(questionId)}
                </ul>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return { choices: state.choices.all };
}

export default connect(mapStateToProps, { fetchChoices })(ChoiceList);