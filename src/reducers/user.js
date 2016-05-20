import {
	LOGIN,
	LOGOUT
} from '../constants/ActionTypes';

const initialState = '';

const user = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				username: action.username,
				password: action.password
			}
		case LOGOUT:
			return '';
		default:
			return state;
	}
};

module.exports = user;