import React from 'react';
import ReactDOM from 'react-dom';
import '../css/css1.css';

export default class Hello extends React.Component {
    render() {
        return (<div>注意组件名的<span className="red">{this.props.uppercase}</span></div>);
    }
}
