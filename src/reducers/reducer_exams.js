import { FETCH_EXAM } from '../actions/index';

const INITIAL_STATE = { all: [], exams: null };

export default function ( state = INITIAL_STATE, action ) {
    switch (action.type) {
        case FETCH_EXAM:
            return {...state , all: action.payload.data};
        default:
            return state;
    }
}