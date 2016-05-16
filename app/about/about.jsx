import React from 'react';

class About extends React.Component {
  render() {
    return (
        <div>
            <div>Hi! this is about page</div>
            {this.props.children}
        </div>
    )
  }
}

export default About;