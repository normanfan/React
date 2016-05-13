import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Hello from './components/hello/hello.jsx';
import Timer from './components/timer/timer.jsx';
import Todo from './components/todo/todo.jsx';
import Output from './components/output/output.jsx';
import Datepicker from './components/datepicker/datepicker.jsx';

import './main.css';

injectTapEventPlugin();

const App = () => (
    <div>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Hello name="Jason Bai" />
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
);

ReactDOM.render( <App />, document.querySelector('#app'));

