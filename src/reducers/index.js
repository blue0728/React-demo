import {
	combineReducers
} from 'redux';
import user from './user';

const rootReducer = combineReducers({
	user
});

module.exports = rootReducer;