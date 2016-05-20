import Root from '../containers/Root'
import Web from '../containers/Web'
import Member from '../containers/Member'
const routes = [{
	path: '/',
	component: Root,
	indexRoute: {
		component: Web
	},
	childRoutes: [{
		path: 'index',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('../containers/Index'))
			})
		}
	}, {
		path: 'login',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('../containers/Login'))
			})
		}
	}]
}, {
	path: 'member',
	component: Root,
	indexRoute: {
		component: Member
	},
	childRoutes: []
}];

module.exports = {
	routes
}