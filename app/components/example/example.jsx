import React from 'react';

/*ES6编写组件练习*/

export default class Example extends React.Component {

	//构造函数
	constructor(props) {
		super(props);
		this.state = {
			title: "Click Me",
			data: [{
				name: "张三",
				age: 28
			}, {
				name: "李四",
				age: 26
			}]
		};
	}

	//默认props 在组件类创建的时候调用一次，然后返回值被缓存下来
	static defaultProps = {
		max: 200,
		min: 100
	}

	//默认约束
	static propTypes = {
		min: React.PropTypes.number,
		max: React.PropTypes.number
	}

	//静态方法
	customMethod = (msg) => {
		console.log(msg);
	}

	//事件处理函数
	btnClick = () => {
		console.log(this); //this为该组件类
		console.log(this.refs.tex); //this.refs.tex为组件里面索引为tex的
		this.setState({
			title: "have Clicked"
		});
	}

	componentWillMount() {
		console.info("componentWillMount:在初始化渲染执行之前立刻调用");
		this.customMethod("这里调用了静态方法");
	}

	componentDidMount() {
		console.info("componentDidMount:DOM已经加载完毕");
	}

	//入口函数 
	render() {
		const exa = {
			margin: '20px 0',
			borderTop: '3px solid #7F8C8D',
			padding: '20px 0',
			background: '#ECF0F1'
		}
		return (
			<div style={exa}>
				< input type = "text" ref = "tex" / >
				< input type = "button"	onClick = {	this.btnClick } value = {this.state.title} /> 
				{
					this.props.min
				} {
					this.props.max
				} {
					this.state.data.map((item,index) => {
						return <span key={index}> {item.name}: {item.age} < /span>
					})
				} 
			< /div>
		)
	}
}
