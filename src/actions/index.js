import axios from 'axios';

export const FETCH_EXAM = 'FETCH_EXAM';
export const CREATE_EXAM = 'CREATE_EXAM';
export const FETCH_oneEXAM = 'FETCH_oneEXAM';
export const DELETE_EXAM = 'DELETE_EXAM';

const ROOT_URL = 'http://localhost:7777/v1/exam/';

export function fetchExams() {
    const request = axios.get(`${ROOT_URL}`);

    return {
        type: FETCH_EXAM,
        payload: request
    };
}

export function createExam(props){
    const request = axios.post(`${ROOT_URL}` , props);
    console.log(request);
    return {
        type: CREATE_EXAM,
        payload: request
    };
}

export function fetchOneExam(id) {
    const request = axios.get(`${ROOT_URL}/${id}`);

    return {
      type: FETCH_oneEXAM,
      payload: request
    };
}

export function deleteExam(id){
    const request = axios.delete(`${ROOT_URL}/${id}`);

    return {
        type: DELETE_EXAM,
        payload: request
    };
}