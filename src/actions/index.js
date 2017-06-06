import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = "?key=dance2die1234"

// Action Creator
export function fetchPosts() {
    // "request" is a promise.
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        // redux-promise middleware will automatically resolve this request into an object from a promise
        payload: request
    };
}