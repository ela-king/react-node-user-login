import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import * as userActions from '../Auctions/userActions';
import { bindActionCreators } from 'redux';
import { ToastContainer, toast } from 'react-toastify';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            submitted: false
        }
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ submitted: true })
        const { userName, password } = this.state;
        const { history } = this.props;
        if (userName && password) {
            this.props.userActions.loginUser(history, { userName: userName, password: password });
        }
    }
    render() {
        const { submitted, userName, password } = this.state
        return (
            <div className="inner">
                <form onSubmit={this.handleSubmit} noValidate>
                    <h3>Log in</h3>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text"
                            onChange={this.handleChange}
                            name="userName"
                            className="form-control"
                            placeholder="Enter Username" />
                        {submitted && !userName &&
                            <span className='error'>Username required</span>}
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            onChange={this.handleChange}
                            name="password"
                            className="form-control"
                            placeholder="Enter password" />
                        {submitted && !password &&
                            <span className='error'>Password required</span>}
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>

                    <p className="forgot-password text-center ">
                        <Link className="navbar-brand" to={"/register"}>Register</Link>
                    </p>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    //  console.log(state)
    return {
        //  listUser: state.userReducer.getAllUser,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
