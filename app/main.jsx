import React from 'react';
import ReactDOM from 'react-dom';

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect} from 'react-router';

// 引入单个页面（包括嵌套的子页面）
import Profile from './profile/profile.jsx';
import Antdes from './antdes/antdes.jsx';
import Message from './antdes/message/message.jsx';
import Gallery from './gallery/gallery.jsx';

// 引入Ant-Design样式
import 'antd/dist/antd.css';
import './main.css';

// 配置导航
class Init extends React.Component {
  render() {
    return (
      <div>
        <div id="leftMenu">
          <div id="logo"><img src='images/logo.jpg' width="100"/></div>
          <Link to="/profile" activeClassName="active">Profile</Link>
          <Link to="/antdes" activeClassName="active" title="Ant Design">AntDes</Link>
          <Link to="/gallery" activeClassName="active">Gallery</Link>
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
      <Route path="antdes" component={Antdes}>
        <Route path="/message" component={Message} />  //子视图
        <Redirect from="message" to="/message" />   //重定向，兼容旧URL
      </Route>
      <Route path="gallery" component={Gallery} />
    </Route>
  </Router>
), document.querySelector('#init'))
