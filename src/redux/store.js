import { createStore, applyMiddleware } from 'redux';
/* add middleware to the store to catch actions and display them 
whenever they are dispatched, logger catches the action, 
logs it in the console then moves it along. */
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

/* spread all of the methods/values in the middlewares array into the 
applyMideware function call as individual arguments, 
this makes it more scalable*/ 
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;