import React from 'react';
import DevTools from '../components/DevTool';

const Root = React.createClass({

	render: function() {
		return (
			<div>
				{this.props.children}
				<DevTools />
			</div>
		);
	}

});

export default Root;