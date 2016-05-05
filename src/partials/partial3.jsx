import React from 'react';
import ReactDOM from 'react-dom';

export default class Father extends React.Component {
    render() {
        return (
            <ol>
                {
                    React.Children.map(this.props.children, function(child) {
                        return <li>{child}</li>
                    })
                }
            </ol>            
        );
    }
}