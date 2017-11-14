import { FETCH_EXAM, FETCH_oneEXAM } from '../actions/index';

const INITIAL_STATE = { all: [], exams: null };

export default function ( state = INITIAL_STATE, action ) {
    switch (action.type) {
        case FETCH_oneEXAM:
            return {...state, exam: action.payload.data};
        case FETCH_EXAM:
            return {...state , all: action.payload.data};
        default:
            return state;
    }
}