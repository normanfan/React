import React from 'react';
import ReactDOM from 'react-dom';
import {Hello} from './partials/partial1';
import John from './partials/partial2';
import Father from './partials/partial3';

var mountNode = document.getElementById('hello');
var mountNode2 = document.getElementById('john');
var mountNode3 = document.getElementById('childrenlist');

ReactDOM.render(<Hello uppercase="首字母要大写"/>, mountNode);
ReactDOM.render(<John/>, mountNode2);
ReactDOM.render(<Father>
                    <span>子节点一</span>
                    <span>子节点二</span>    
                </Father>, mountNode3);