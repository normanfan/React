import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

import Profile from './profile/profile.jsx';
import About from './about/about.jsx';

import './main.css';

class Init extends React.Component {
  render() {
    return (
      <div>
        <div id="leftMenu">
          <Link to="/profile">Profile</Link>
          <Link to="/about">About</Link>
        </div>
          <div id="rightWrap">
            {this.props.children}
          </div>
      </div>
    )
  }
}


ReactDOM.render((
  <Router history={hashHistory} >
    <Route path="/" component={Init}>
      <Route path="profile" component={Profile} />
      <Route path="about" component={About} />
    </Route>
  </Router>
), document.querySelector('#init'))
