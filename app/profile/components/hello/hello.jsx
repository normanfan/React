import React from 'react';

/* 变换标题组件 */
export default class Hello extends React.Component {
  	constructor(props) {
  	  	super(props);
  	  	this.state = {
  	  		text:'a Physicist'
  	  	}
  	}
  	
  	componentDidMount() {
  		let textArr = ['an English Enthusiast','a Web Developer','a Photographer','a Physicist'];
  		let l = textArr.length;
		let i = 0;
  		let changeText = () => {
  			this.setState({text:textArr[i]});
  			i++;
  			if( i === l ) {
  				i = 0;
  			}
  		}  	
  		this.interval = setInterval(changeText, 1500); 
  	}

  	render() {
  		const hStyle = {
  			textAlign: 'left',
  			paddingLeft: '37%'
  		}
  	  	return (
  	  	 	<h1 id="hello" style={hStyle} className="animated flipInX">Hi, I am {this.state.text}</h1>
  	  	);
  	}
}

