import { combineReducers } from 'redux';
import ExamsReducer from './reducer_exams';
import QuestionsReducer from './reducer_questions';
import ChoicesReducer from './reducer_choices';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    exams: ExamsReducer,
    questions: QuestionsReducer,
    choices : ChoicesReducer,
    form: formReducer
});

export default rootReducer;
