const INITIAL_STATE = {
	email: '',
	password: '',
	authed: false
}

export default (state = INITIAL_STATE, {type, payload}) => {
	console.log('type: ', type)
	console.log('payload: ', payload)
	return state
}