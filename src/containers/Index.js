import React from 'react';
import {
    bindActionCreators
} from 'redux';
import {
    connect
} from 'react-redux';
import {
    Link
} from 'react-router';
import * as userAction from '../actions/user';

class Index extends React.Component {
    render() {
        const actions = this.props.actions
        const user = this.props.user

        if (user) {
            return (
                <div>
                    <h2>用户名：{ user.username },密码：{user.password} </h2>
                    <Link to="/" onClick={actions.onLogoutSubmit.bind(this)}>退出</Link>
                </div>
            );
        } else {
            return (
                <h2>去登陆吧<Link to="/login">login...</Link></h2>
            );
        }
    }
}

/**
 * [description] state转成props对象
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
const mapStateToProps = (state) => {
    return {
        user: state.user
    };
}

/**
 * [description] actions 转成props对象
 * @param  {[type]} dispatch [description]
 * @return {[type]}          [description]
 */
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(userAction, dispatch)
    }
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);