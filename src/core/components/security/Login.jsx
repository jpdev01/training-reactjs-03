import React, { Component, useState } from 'react';
import './style.css';
import avatarIcon from './../../../assets/images/avatar.png';
import validateLogin from './validateLogin';
import { Navigate } from 'react-router-dom';
import PortalUtil from '../../shared/utils/PortalUtil';

export default class Login extends Component {

    state = {
        username: "",
        password: "",
        redirect: false
    };

    changeUserName = (event) => {
        this.setState({ username: event.target.value });
    }

    changePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    login = () => {
        let promiseLogin = validateLogin({
            username: this.state.username,
            password: this.state.password
        });
        promiseLogin
            .then(result => {
                console.log(result.data);
                PortalUtil.setUserToken(result.data.token);
                //this.props.history.push("/dashboard");
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        if (this.state.redirect) {
            return <Navigate to="/dashboard" />
            //return <Redirect to="/dashboard" />
        }
        else {
            return (
                <div>

                    <div class="wrapper fadeInDown">
                        <div id="formContent">

                            <div class="fadeIn first">
                                <img src={avatarIcon} id="icon" alt="User Icon" />
                            </div>

                            <form name="frmlogin">
                                <input type="text" id="login" class="fadeIn second" name="username" placeholder="login" value={this.username} onChange={this.changeUserName} />
                                <input type="password" id="password" class="fadeIn third" name="password" placeholder="password" value={this.password} onChange={this.changePassword} />
                                <input type="button" class="fadeIn fourth" value="Log In" onClick={this.login} />
                            </form>

                            <div id="formFooter">
                                <a class="underlineHover" href="">Forgot Password?</a>
                            </div>

                        </div>
                    </div>
                </div>
            );
        }
    }
}
