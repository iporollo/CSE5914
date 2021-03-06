// import { createStore } from "redux";
// import rootReducer from "./reducers";

// export default createStore(rootReducer);

import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { State, reducer, initialState } from '../reducers'

/*
 * We're giving State interface to create store
 * store is type of State defined in our reducers
 */
// const store = createStore<State>(reducer, initialState, applyMiddleware(logger))
const store = createStore<State>(reducer, initialState, applyMiddleware(logger))

export default store

// Followed this example: https://github.com/Nemak121/react-redux-todo-ts