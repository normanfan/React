import React from 'react';

/*output组件*/

class AnotherOutput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            v: 'Type anything here!'
        }
    }
    changeV = () => {
        this.setState({v: this.refs.dataFrom.value });
    }    
    render() {
        return (
            <div>
                <label>Input: </label><input type="text" onChange={this.changeV} value={this.state.v} ref="dataFrom"/>&nbsp;
                <label>Output: </label><span>{this.state.v}</span><br/>
            </div>
        )
    }
}

class Output extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            v: 'Type anything here!'
        }
    }
    changeV = (e) => {
        this.setState({v:e.target.value });
    }
    focusMe = () => {
        this.setState({v: ''});
    }
    render() {
        return (
            <div>
                <label>Input: </label><input type="text" onChange={this.changeV} value={this.state.v} onFocus={this.focusMe}/>&nbsp;
                <label>Output: </label><span>{this.state.v}</span><br/>
                <AnotherOutput />
            </div>
        )
    }
}

export default Output;
