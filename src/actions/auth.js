import {
	USER_EMAIL,
	USER_PASSWORD,
	USER_LOGIN
} from './types'

export const emailInput = value => ({type: USER_EMAIL, payload: value})
export const passwordInput = value => ({type: USER_PASSWORD, payload: value})
export const loginUser = value => ({type: USER_LOGIN, payload: value})