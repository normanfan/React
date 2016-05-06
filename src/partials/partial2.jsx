import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './partial1';

export default class Hehe extends React.Component {
    alertMe() {
        alert("你刚才点了我一下。。。");
    }
    render() {
        const styleObj = {
            color:'red'
        };
        const names = Array.of(6,23,89);
        return (
            <div>
                <div>在ES6里，我们通过定义一个继承自React.Component的class来定义一个组件类，像这样：</div>
                <p style={styleObj}>class Photo extends React.Component {}</p>
                <Hello uppercase="首字母要大写again" />
                <ul>
                    {
                        names.map(name => {
                            return <li key={name} onClick={this.alertMe}>{name}</li>
                        })
                    }                    
                </ul>
            </div>
        );
    }
}