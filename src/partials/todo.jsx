import React from 'react';
import ReactDOM from 'react-dom';

// 列表组件
class List extends React.Component {
	render() {
		let createItem = function(item) {
			return <li key={item.id}>{item.text}</li>;
		};
		return (
			<ol>{this.props.items.map(createItem)}</ol>
		);
	}
}

// 输出组件整体，其中用到了列表组件
export default class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.state = {
			items: [],
			text: ''
		};
	}
	onChange(e) {
		this.setState({text: e.target.value});
	}
	handleSubmit(e) {
		e.preventDefault();
		var nextItems = this.state.items.concat([{text: this.state.text,id: Date.now()}]);
		var nextText = '';
		this.setState({items: nextItems, text: nextText});
	}
    render() {
        return (<div>
	        		<h3>TODO LIST</h3>
	        		<List items={this.state.items} />
	        		<form onSubmit={this.handleSubmit}>
	        			<input onChange={this.onChange} value={this.state.text} />
	        			<button>{'Push #' + (this.state.items.length + 1)}</button>
	        		</form>
        		</div>);
    }
}