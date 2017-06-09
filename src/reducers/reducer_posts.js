import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case DELETE_POST:
            // this line removes a post in "state" 
            // where the ID matches the value returned from "action.payload"
            // "action.payload" contains a post ID from "actions/index.js/deletePost"

            // This line cleans the state by removing deleted record from the memory
            return _.omit(state, action.payload);
        case FETCH_POST:
            // const post = action.payload.data;
            // const newState =  {...state};
            // newState[post.id] = post;
            // return newState;

            return {...state, [action.payload.data.id]: action.payload.data}
        case FETCH_POSTS:
            // Turn an array into a dictionary where the key is the ID of each post.
            // e.g.) [{id:1, text: "hi"}] becomes ["1":{id:1, text: "high"}]
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}