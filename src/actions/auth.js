export const checkAuth = (value) => {
	return {
		type: 'USER_AUTHED',
		payload: value
	}
}