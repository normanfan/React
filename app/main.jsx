import React from 'react';
import ReactDOM from 'react-dom';

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect,IndexLink} from 'react-router';

// 引入单个页面（包括嵌套的子页面）
import Welcome from './welcome/welcome.jsx';
import Profile from './profile/profile.jsx';
import Antdes from './antdes/antdes.jsx';
import Message from './antdes/message/message.jsx';
import Gallery from './gallery/gallery.jsx';
import Last from './last/last.jsx';

// 引入Ant-Design样式 & Animate.CSS样式
import 'antd/dist/antd.css';
import 'animate.css/animate.min.css';

// 引入主体样式文件
import './main.css';

// 配置导航
class Init extends React.Component {
    render() {
        return (
            <div>
                <div id="leftMenu">
                    <IndexLink to="/" id="logo"><img src='images/logo.png' width="50"/></IndexLink>
                    <Link to="/profile" activeClassName="active" className="navItem">Profile</Link>
                    <Link to="/antdes" activeClassName="active" className="navItem">AntDes</Link>
                    <Link to="/gallery" activeClassName="active" className="navItem">Gallery</Link>
                    <Link to="/last" activeClassName="active" className="navItem">Last</Link>
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
            <IndexRoute component={Welcome}/>
            <Route path="profile" component={Profile} />
            <Route path="antdes" component={Antdes}>
                <Route path="/message" component={Message} />  //子视图
                <Redirect from="message" to="/message" />   //重定向，兼容旧URL
            </Route>
            <Route path="gallery" component={Gallery} />
            <Route path="last" component={Last} />
        </Route>
    </Router>
), document.querySelector('#init'))
