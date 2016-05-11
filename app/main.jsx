import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import Hello from './components/hello/hello.jsx';
import Range from './components/range/range.jsx';
import Exa from './components/example/example.jsx';

ReactDOM.render( <Hello />, document.querySelector('#hello'));
ReactDOM.render( <Range />, document.querySelector('#range'));
ReactDOM.render( <Exa />, document.querySelector('#example'));
