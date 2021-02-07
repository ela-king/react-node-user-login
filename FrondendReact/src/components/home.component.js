import React, { Component } from "react";
import { Table } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import * as userActions from '../Auctions/userActions';
import { bindActionCreators } from 'redux';
class Home extends Component {
constructor(props){
  super(props)
}
componentDidMount(){
  this.props.userActions.getAllUser()
}
logout=()=>{
  localStorage.clear()
  this.props.history.push('/')
}
  render() {

    const {listUser}=this.props
    return (<>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="navbar-brand font-weight-bold">User List</div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <div className="nav-link font-weight-bold cursorpointer" onClick={this.logout}>Sign Out</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="home-inner">
        <Table responsive="md">
          <thead>
           
            <tr>
              <th>S.No</th>
              <th>User Name</th>
              <th>Given Name</th>
              <th>Sur Name</th>
              <th>Date of Birth</th>

            </tr>
          </thead>
          <tbody>
          {listUser && listUser.map((item,i)=>(
            <tr key={i}>
              <td>{i+1}</td>
              <td>{item.userObj.properties.userName}</td>
              <td>{item.userObj.properties.givenName}</td>
              <td>{item.userObj.properties.surName}</td>
              <td>{item.userObj.properties.DOB}</td>
            </tr>
            ))}

          </tbody>
        </Table>
      </div>
    </>
    );
  }
}


function mapStateToProps(state) {
   console.log(state)
  return {
    listUser: state.userReducer.getAllUser,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);