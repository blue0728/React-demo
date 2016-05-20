import * as types from '../constants/ActionTypes';

/**
 * [description] 登录
 * @param  {[type]} username 
 * @param  {[type]} password 
 * @return {[type]}    
 */
const onLoginSubmit = (username, password) => {
	return {
		type: types.LOGIN,
		username,
		password
	};
};
/**
 * [description] 退出
 * @return {[type]}
 */
const onLogoutSubmit = () => {
	return {
		type: types.LOGOUT
	};
};

module.exports = {
	onLoginSubmit,
	onLogoutSubmit
}