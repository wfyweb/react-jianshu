import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer'
import thunk from 'redux-thunk'
// 开启控制台redux调试工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

export default store;