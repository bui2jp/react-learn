//
// actionを定義 action creator
//
import axios from "axios";

//typeの定義
export const READ_EVENTS = 'READ_EVENTS';

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';

export const readEvents = () => async (dispatch) => {
    console.log('readEvents start ');
    
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)

    console.log(response)

    //dispatch で reducer に渡す 
    // reducer 側で action として受け取れる）
    dispatch({ type: READ_EVENTS, response});
}
