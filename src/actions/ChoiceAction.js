import axios from 'axios';

export const FETCH_CHOICE = 'FETCH_CHOICE';
export const FETCH_CHOICES = 'FETCH_CHOICES';
export const CREATE_CHOICE = 'CREATE_CHOICE';
export const DELETE_CHOICE = 'DELETE_CHOICE';

const ROOT_URL = 'http://localhost:7777/v1/choice/';

export function fetchChoice(id){
    const request = axios.get(`${ROOT_URL}/${id}`);

    return {
        type: FETCH_CHOICE,
        payload: request
    };
}

export function fetchChoices() {
    const request = axios.get(`${ROOT_URL}`);

    return {
        type: FETCH_CHOICES,
        payload: request
    };
}

export function createChoice( props ) {
    const request = axios.post(`${ROOT_URL}/${props.question_id}` , props);

    return {
        type: CREATE_CHOICE,
        payload: request
    };
}

export function deleteChoice(id){
    const request = axios.delete(`${ROOT_URL}/${id}`)

    return {
        type: DELETE_CHOICE,
        payload: request
    }
}