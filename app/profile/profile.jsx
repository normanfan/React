import React from 'react';

// 引入Material-UI相关模块
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// 引入各部分组件
import Hello from './components/hello/hello.jsx';
import Timer from './components/timer/timer.jsx';
import Todo from './components/todo/todo.jsx';
import Output from './components/output/output.jsx';
import Datepicker from './components/datepicker/datepicker.jsx';

import './profile.css';

// 初始化触屏事件插件
injectTapEventPlugin();

export default class Profile extends React.Component {
    render() {
        return (
            <div>
              <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Hello name="What's Up ?" />
              </MuiThemeProvider>
              <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Timer />
              </MuiThemeProvider>
              <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Todo />
              </MuiThemeProvider>
              <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Output />
              </MuiThemeProvider>
              <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Datepicker />
              </MuiThemeProvider>
            </div>
        )
    }    
}
