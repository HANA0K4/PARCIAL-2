import { FETCH_POSTS } from "./post";
const initialState = {
    posts: [],
};

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, posts: action.payload };
            default:
                return state;
    }
}