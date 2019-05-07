import { applyMiddleware, createStore, compose } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers";

const reduxStore = createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
);

export default reduxStore;