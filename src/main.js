import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './partials/partial1';
import John from './partials/partial2';
import Father from './partials/partial3';
import Todo from './partials/todo';
import Timer from './partials/timeCount';
import './css/main.css';

let mountNode = document.getElementById('hello');
let mountNode2 = document.getElementById('john');
let mountNode3 = document.getElementById('childrenlist');
let todo = document.getElementById('todo');
let time = document.getElementById('time');

ReactDOM.render(<Hello uppercase="组件一"/>, mountNode);
ReactDOM.render(<John/>, mountNode2);
ReactDOM.render(<Father />, mountNode3);
ReactDOM.render(<Todo/>, todo);
ReactDOM.render(<Timer/>, time);