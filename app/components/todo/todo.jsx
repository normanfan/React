import React from 'react';

/*TODO组件*/

class List extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'List';
    }
    render() {
        return <div>List</div>;
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

    onChange = (e) => {
        this.setState({valueText: e.target.value});
    }

    addItem = (e) => {
        e.preventDefault();
        var newItems = this.state.items.push(this.state.valueText);
        console.log(newItems);
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
                    <input type="text" value={this.state.valueText} onChange={this.onChange} />
                    <button onClick={this.addItem}  ># {this.state.num}</button>
                </div>
                <List items={this.state.items} />
            </div>
        )
    }
}