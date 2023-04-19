import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import Reducer from "./reducer";

const rootReducer = combineReducers({
    posts: Reducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;




