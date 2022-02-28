import { READ_EVENTS, DELETE_EVENTS } from "../action";
import _ from 'lodash'

const initialState = {};

const myFunc = (events = initialState, action) => {
    console.log(' myFunc start ');
    switch( action.type ){
        case READ_EVENTS:
            console.log(' READ_EVENTS ');
            //console.log(action);
            console.log(action.response.data);

            //map で 配列をデータ構造を key, value に変更
            console.log(_.mapKeys(action.response.data, 'id'));            
            return _.mapKeys(action.response.data, 'id');
        case DELETE_EVENTS:
            console.log("DELETE_EVENTS :" + action.id);
            delete events[action.id];
            //return events;
            //スプレッド演算子
            return { ...events };
        default:
            return events;
    }
}

export default myFunc;
