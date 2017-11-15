import { FETCH_CHOICE, FETCH_CHOICES } from "../actions/ChoiceAction";

const INITIAL_STATE = { all: [], choices: null };

export default function ( state = INITIAL_STATE , action ) {
    switch (action.type){
        case FETCH_CHOICE:
            return {...state , choice: action.payload.data};
        case FETCH_CHOICES:
            return {...state , all: action.payload.data};
        default:
            return state;
    }
}