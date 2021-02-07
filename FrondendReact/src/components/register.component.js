import React, { Component } from "react";
import {Link} from "react-router-dom"
import { connect } from 'react-redux'
import * as userActions from '../Auctions/userActions';
import { bindActionCreators } from 'redux';

class Register extends Component {

constructor(props) {
    super(props)
    this.state = {
        userName: '',
        password: '',
        givenName:'',
        surName:'',
        DOB:'',
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
    const { userName, password,givenName,surName,DOB } = this.state;
    const {history } = this.props;
    if (userName && password && givenName && surName && DOB) {
      this.props.userActions.addUser(history,{userName:userName, password:password,givenName:givenName,surName:surName,DOB:DOB});
    }
}
render() {
    const { submitted, userName, password ,givenName,surName,DOB} = this.state
    return (
        <div className="inner">
            <form onSubmit={this.handleSubmit} noValidate>
                <h3>Register</h3>
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
                    <div className="form-group">
                        <label>Given Name</label>
                        <input type="text"
                            onChange={this.handleChange}
                            name="givenName"
                            className="form-control"
                            placeholder="Enter Username" />
                        {submitted && !givenName &&
                            <span className='error'>GivenName required</span>}
                    </div>

                    <div className="form-group">
                        <label>Sur Name</label>
                        <input
                            type="text"
                            onChange={this.handleChange}
                            name="surName"
                            className="form-control"
                            placeholder="Enter password" />
                        {submitted && !surName &&
                            <span className='error'>SurName required</span>}
                    </div>
                    <div className="form-group">
                        <label>DOB</label>
                        <input
                            type="date"
                            onChange={this.handleChange}
                            name="DOB"
                            className="form-control"
                            placeholder="Enter password" />
                        {submitted && !DOB &&
                            <span className='error'>DOB required</span>}
                    </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right font-weight-light">
                    Already registered <Link to="/login">log in?</Link>
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
export default connect(mapStateToProps, mapDispatchToProps)(Register);