import {createStore, applyMiddleware, combineReducers} from 'redux'
import LoginReducer from './reducers/LoginReducer'
import thunk from 'redux-thunk'
import {combine} from './util/utils'




export default createStore(combineReducers(combine(LoginReducer)), applyMiddleware(thunk))