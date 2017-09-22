import axios from 'axios';

const initialState = {
    first: '',
    last: '',
    gender: '',
    hair: '',
    eye: '',
    hobby: "",
    day: "",
    month: "",
    year: ""
}

const SET_PROFILE = "SET_PROFILE";

export function setProfile(obj){
    return {
        type: SET_PROFILE,
        payload: obj
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_PROFILE + "_FULFILLED":
            return Object.assign({}, state, {first: action.payload.first, last: action.payload.last, gender: action.payload.gender, hair: action.payload.hair, eye: action.payload.eye, hobby: action.payload.hobby, day: action.payload.day, month: action.payload.month, year: action.payload.year})    
        default:
            return state;
    }
}