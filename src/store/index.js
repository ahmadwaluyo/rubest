import { applyMiddleware, createStore } from 'redux';
import thunk from './middlewares/thunk';
import rootReducers from './reducers/index';

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;