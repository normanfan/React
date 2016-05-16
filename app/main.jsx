import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute, Redirect} from 'react-router';

// 引入单个页面（包括嵌套的子页面）
import Profile from './profile/profile.jsx';
import About from './about/about.jsx';
import Message from './about/message/message.jsx';

import './main.css';

// 配置导航
class Init extends React.Component {
  render() {
    return (
      <div>
        <div id="leftMenu">
          <Link to="/profile" activeClassName="active">Profile</Link>
          <Link to="/about" activeClassName="active">About</Link>
        </div>
          <div id="rightWrap">
            {this.props.children}
          </div>
      </div>
    )
  }
}

// 配置路由
ReactDOM.render((
  <Router history={hashHistory} >
    <Route path="/" component={Init}>
      <IndexRoute component={Profile}/>
      <Route path="profile" component={Profile} />
      <Route path="about" component={About}>
        <Route path="/message" component={Message} />  //子视图
        <Redirect from="message" to="/message" />   //重定向，兼容旧URL
      </Route>
    </Route>
  </Router>
), document.querySelector('#init'))
