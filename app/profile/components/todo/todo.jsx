import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

/*TODO组件*/
class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ol>
                {
                    this.props.items.map((v,i) => {
                        return <li key={i}>{v}</li>
                    })
                }
            </ol>
        )
    }
}

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num:1,
            items: [],
            valueText:''
        };
    }

    valueChange = (e) => {
        this.setState({valueText: e.target.value});  //捕获当前事件对象目标中的值，插入到valueText
    }

    addItem = (e) => {
        e.preventDefault();
        var newItems = this.state.items.concat(this.state.valueText);  //注意返回值，需要返回新数组
        this.setState({ 
            num: this.state.num + 1, 
            items: newItems,
            valueText: ''
        });
    }

    render() {
        let btnStyle = {
            height:28
        };
        let bfStyle = {
            fontSize:20,
            fontWeight:'bold',
            fontStyle: 'italic'
        }
        return (
            <div id="todo">
                <div>
                    <TextField floatingLabelText="I Am Going To Do...." type="text" value={this.state.valueText} onChange={this.valueChange} />
                    <RaisedButton primary={true} onClick={this.addItem} style={btnStyle} label={'# '+this.state.num} labelStyle={bfStyle} ></RaisedButton>
                </div>
                <List items={this.state.items} />
            </div>
        )
    }
}