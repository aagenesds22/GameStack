import {createStore, applyMiddleware} from 'redux';
import stateManager from '../reducer/reducer.js';
import reduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const middleware = [reduxThunk];

console.log(stateManager);

const store = createStore(stateManager, 
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;