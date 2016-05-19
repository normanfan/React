import React from 'react';
import '../animate.css';
import './last.css';

export default class Last extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }        
    }
    render() {
        return (
            <div>
                <h1 className="animated flipInX" id="ege">没有彩蛋</h1>
                <img src="../images/last.jpg" width="100" id="lastPic" className="animated fadeInUp" />
            </div>
        )
    }       
}