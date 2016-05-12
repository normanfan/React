import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import Hello from './components/hello/hello.jsx';
import Range from './components/range/range.jsx';
import Exa from './components/example/example.jsx';
import Timer from './components/timer/timer.jsx';
import Todo from './components/todo/todo.jsx';

ReactDOM.render( <Hello name="Jason Bai"/>, document.querySelector('#hello'));
ReactDOM.render( <Range />, document.querySelector('#range'));
ReactDOM.render( <Exa />, document.querySelector('#example'));
ReactDOM.render( <Timer />, document.querySelector('#timer'));
ReactDOM.render( <Todo />, document.querySelector('#todo'));
