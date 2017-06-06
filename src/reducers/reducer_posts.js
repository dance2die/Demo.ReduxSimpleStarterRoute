import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            // Turn an array into a dictionary where the key is the ID of each post.
            // e.g.) [{id:1, text: "hi"}] becomes ["1":{id:1, text: "high"}]
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}