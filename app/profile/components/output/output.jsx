import React from 'react';
import TextField from 'material-ui/TextField';

/*output组件*/

class Output extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            v: ''
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
            <div id="output">
                <label>Input: </label><TextField floatingLabelText="Typing Something Here" onChange={this.changeV} value={this.state.v} onFocus={this.focusMe}/>&nbsp;
                <label>Output: </label><span>{this.state.v}</span><br/>
            </div>
        )
    }
}

export default Output;
