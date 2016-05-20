import React from 'react'
import {
	Link
} from 'react-router'

//layout 组件

var Member = React.createClass({
	render() {
		return (
			<div>
				<h1>我是Member后台</h1>
				{this.props.children}
			</div>
		)
	}
})

module.exports = Member;