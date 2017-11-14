import axios from 'axios';

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const CREATE_QUESTION = 'CREATE_QUESTION';
export const FETCH_QUESTION = 'FETCH_QUESTION';
export const DELETE_QUESTION = 'DELETE_QUESTION';

const ROOT_URL = 'http://localhost:7777/v1/question/';

export function fetchQuestions(){
    const request = axios.get(`${ROOT_URL}`);

    return {
        type: FETCH_QUESTIONS,
        payload: request
    };
}

export function fetchQuestion(id){
    const request = axios.get(`${ROOT_URL}${id}`);

    return {
        type: FETCH_QUESTION,
        payload: request
    };
}

export function createQuestion(props){
    const request = axios.post(`${ROOT_URL}/${props.exam_id}` , props);
    return {
        type: CREATE_QUESTION,
        payload: request
    };
}

export function deleteQuestion(id){
    const request = axios.delete(`${ROOT_URL}/${id}`);

    return {
        type: DELETE_QUESTION,
        payload:request
    }
}

