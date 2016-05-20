import React from 'react';
import {
	Link
} from 'react-router';

const Web = React.createClass({

	render: function() {
		return (
			<div>
				<h1>我是Web前台</h1>
				<ul>
					<Link to="index">去登陆</Link>
					<br/>
					<Link to="member">去后台</Link>
				</ul>
			</div>
		);
	}

});

module.exports = Web;