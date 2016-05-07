import React from 'react';
import ReactDOM from 'react-dom';

export default class Timer extends React.Component {
    render() {
        return (<div>组件的英文名称：<span className="red">{this.props.uppercase}</span></div>);
    }
}