import React from 'react';

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
        return (
            <div>
                <div>
                    <input type="text" value={this.state.valueText} onChange={this.valueChange} />
                    <button onClick={this.addItem} ># {this.state.num}</button>
                </div>
                <List items={this.state.items} />
            </div>
        )
    }
}