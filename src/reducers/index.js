import { combineReducers } from 'redux';
import ExamsReducer from './reducer_exams';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    exams: ExamsReducer,
    form: formReducer
});

export default rootReducer;
