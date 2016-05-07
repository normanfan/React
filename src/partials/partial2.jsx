import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './partial1';
import '../css/css2.css';

export default class Hehe extends React.Component {
    alertMe() {
        alert("你刚才点了我一下。。。");
    }
    render() {
        const styleObj = {
            color:'red'
        };
        const names = [
            {title:"列表一",id:0},
            {title:"列表二",id:1},
            {title:"列表三",id:2}
        ];
        return (
            <div>
                <div>在ES6里，我们通过定义一个继承自React.Component的class来定义一个组件类，像这样：<span style={styleObj}>{'class Photo extends React.Component {...}'}</span></div>
                <Hello uppercase="被嵌套的组件一" />
                <ul>
                    {
                        names.map(name => {
                            return <li key={name.id} onClick={this.alertMe}>{name.title}</li>
                        })
                    }                    
                </ul>
            </div>
        );
    }
}