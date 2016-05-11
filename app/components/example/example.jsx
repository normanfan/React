import React from 'react';

/*练习组件*/

export default class Example extends React.Component {

	//构造函数
	constructor(props) {
		super(props);
		this.state = {
			title: "i am a title",
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
		autoPlay: false,
		maxLoops: 200,
		num: 100
	}

	//默认约束
	static propTypes = {
		num: React.PropTypes.number
	}

	//静态方法
	static customMethod(msg) {
		console.log(msg);
	}

	//事件处理函数
	btnClick() {
		console.log(this); //this为该组件类
		console.log(this.refs.tex); //this.refs.tex为组件里面索引为tex的
		this.setState({
			title: "i changed"
		});
	}

	componentWillMount() {
		console.info("componentWillMount:在初始化渲染执行之前立刻调用");
		Example.customMethod("这里调用了静态方法");
	}

	//入口函数 注意bind后面的this
	render() {
		const exa = {
			margin: '20px 0',
			borderTop: '3px solid #7F8C8D',
			padding: '10px 0',
			background: '#ECF0F1'
		}
		return (
			<div style={exa}>
				< input type = "text" ref = "tex" / >
				< input type = "button"	onClick = {	this.btnClick.bind(this)} value = 'click me' /> 
				{
					this.props.num
				} {
					this.props.maxLoops
				} {
					this.state.title
				}
	
				{
					this.state.data.map(item => {
						return <span key={item.name}> {item.name}: {item.age} < /span>
					})
				} 
			< /div>
		)
	}

	componentDidMount() {
		console.info("componentDidMount:DOM已经加载完毕");
	}

	componentWillReceiveProps(nextProps) {
		console.info("componentWillRecieveProps:" + nextProps);
	}

	componentWillUpdate() {
		console.info("componentWillUpdate");
	}

	componentDidUpdate() {
		console.info("componentDidUpdate");
	}

	componentWillUnmount() {
		console.info("componentWillUnmount");
	}

}
