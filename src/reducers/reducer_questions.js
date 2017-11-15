import { FETCH_QUESTION, FETCH_QUESTIONS } from "../actions/QuestionAction";

const INITIAL_STATE = { all: [], questions: null };

export default function ( state = INITIAL_STATE, action ) {
    switch (action.type) {
        case FETCH_QUESTIONS:
            return { ...state, all: action.payload.data };
        case  FETCH_QUESTION:
            return { ...state, question: action.payload.data };
        default:
            return state;
    }
}