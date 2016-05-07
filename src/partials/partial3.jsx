import React from 'react';
import ReactDOM from 'react-dom';

export default class Father extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.changeInput = this.changeInput.bind(this);
        this.state = {text:''};
    }   
    changeInput(e) {
        this.setState({text:e.target.value});
    }
    handleClick() {
        this.refs.myInput.focus();
        this.refs.myInput.value = '';
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="这是一个普通的输入框"/>                
                <input ref="myInput" value={this.state.text} onChange={this.changeInput}/>
                <button type="button" onClick={this.handleClick}>RESET</button>
            </div>
        );
    }
}