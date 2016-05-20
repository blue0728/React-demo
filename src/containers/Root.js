if (process.env.NODE_ENV === 'ONLINE') {
	module.exports = require('./Root.prod');
} else {
	module.exports = require('./Root.dev');
}