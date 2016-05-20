import React from 'react';
import {
    Link
} from 'react-router';

class LoginForm extends React.Component {

    handleOnLoginSubmit() {
        this.props.onLoginSubmit(
            this.refs.usernameInput.value,
            this.refs.passwordInput.value
        )
    }

    render() {
        return (
            <div>
              <label>用户名: </label><input type="text" ref="usernameInput" />
              <br/>
              <label>密码: </label><input type="password" ref="passwordInput" />
              <br/>
              <Link to="index" onClick={this.handleOnLoginSubmit.bind(this)}>登录</Link>{' '}
              <Link to="index">返回</Link>
            </div>
        );
    }
}

module.exports = LoginForm;