//
// actionを定義 action creator
//
import axios from "axios";

//typeの定義
export const READ_EVENTS = 'READ_EVENTS';
export const CREATE_EVENTS = 'REATE_EVENTS';

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';

export const readEvents = () => async (dispatch) => {
    console.log('readEvents start ');
    
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)

    console.log(response)

    //dispatch で reducer に渡す 
    // reducer 側で action として）
    dispatch({ type: READ_EVENTS, response});
}

export const postEvent = ( values ) => async (dispatch) => {
    console.log('postEvents start ');
    
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)

    console.log(response)

    //dispatch で reducer に渡す 
    // reducer 側で action として）
    dispatch({ type: CREATE_EVENTS, response});
}

