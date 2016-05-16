import React from 'react';

/* Hello World 组件 */
export default class Hello extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1 id="hello">Hey! Man {this.props.name}</h1>
    );
  }
}

