import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Login from "./components/login.component";
import SignUp from "./components/register.component";
import Home from "./components/home.component";
import { PrivateRoute } from './PrivateRoute'
function App() {
  return (<Router>
    <div className="App">
      <div className="outer">
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={SignUp} />
          <Redirect from="*" to="/" />
        </Switch>
        <ToastContainer />
      </div>
    </div></Router>
  );
}

export default App;