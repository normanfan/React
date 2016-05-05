import React from 'react';
import ReactDOM from 'react-dom';

export default class Hehe extends React.Component {
    render() {
        const styleObj = {
            color:'red'
        };
        const names = Array.of(6,23,89);
        return (
            <div>
                <div>在ES6里，我们通过定义一个继承自React.Component的class来定义一个组件类，像这样：</div>
                <p style={styleObj}>class Photo extends React.Component {}</p>
                <ul>
                    {
                        names.map(name => {
                            return <li key={name}>{name}</li>
                        })
                    }                    
                </ul>
            </div>
        );
    }
}