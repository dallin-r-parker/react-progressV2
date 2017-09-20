import {USER_EMAIL, USER_PASSWORD} from './types'

export const emailInput = value => ({type: USER_EMAIL, payload: value})
export const passwordInput = value => ({type: USER_PASSWORD, payload: value})