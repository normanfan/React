import React from 'react';
import './hello.css';

/* Hello World 组件 */

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>Hello {this.props.name}</h1>
    );
  }
}

