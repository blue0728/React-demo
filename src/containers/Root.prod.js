import React from 'react';

const Root = React.createClass({

	render: function() {
		return (
			<div>asdf
				{this.props.children}
			</div>
		);
	}

});

module.exports = Root;