import React from 'react';
import '../animate.css';
import './welcome.css';

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }        
    }
    
    render() {
        return (
            <h1 className="animated rotateIn" id="welcome">你&nbsp;好</h1>
        )
    }       
}