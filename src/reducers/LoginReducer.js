import {
	USER_EMAIL,
	USER_PASSWORD,
	USER_LOGIN
} from '../actions/types'

const INITIAL_STATE = {
	email: '',
	password: '',
	authed: false
}

export default (state = INITIAL_STATE, {type, payload}) => {

	switch (type){
		case USER_EMAIL:
			return Object.assign({}, state, {email: payload})
		case USER_PASSWORD:
			return Object.assign({}, state, {password: payload})
		case USER_LOGIN:
			 return Object.assign({}, state, {authed: payload})
		default:
			return state
	}
}