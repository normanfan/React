import React from 'react';
import ReactDOM from 'react-dom';
import {Hello} from './partial';

var mountNode = document.getElementById('r');

ReactDOM.render(<Hello/>, mountNode);