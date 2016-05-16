import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

// 引入单个页面
import Profile from './profile/profile.jsx';
import About from './about/about.jsx';

import './main.css';

// 定义SPA入口类
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

// 渲染DOM
ReactDOM.render((
  <Router history={hashHistory} >
    <Route path="/" component={Init}>
      <Route path="profile" component={Profile} />
      <Route path="about" component={About} />
    </Route>
  </Router>
), document.querySelector('#init'))
