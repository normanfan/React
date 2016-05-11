import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Range from './components/range.jsx';

ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement('div'))
);
ReactDOM.render(
    <Range />,
    document.getElementById('range')
);
