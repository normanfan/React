import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './main.css';
import Hello from './components/hello/hello.jsx';
import Range from './components/range/range.jsx';
import Exa from './components/example/example.jsx';
import Timer from './components/timer/timer.jsx';
import Todo from './components/todo/todo.jsx';
import Output from './components/output/output.jsx';

ReactDOM.render( <Hello name="Jason Bai"/>, document.querySelector('#hello'));
ReactDOM.render( <Range min="20" value="40" />, document.querySelector('#range'));
ReactDOM.render( <Exa />, document.querySelector('#example'));
ReactDOM.render( <Timer />, document.querySelector('#timer'));
ReactDOM.render( <Todo />, document.querySelector('#todo'));
ReactDOM.render( <Output />, document.querySelector('#output'));
