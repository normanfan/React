import React from 'react';
import CarouselPic from './components/carousel/carousel.jsx';
import Cardrow from './components/cardrow/cardrow.jsx';

// 引入模拟数据
import gData from '../data/galleryData.js';

import './gallery.css';

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:gData
        }               
    }
    componentDidMount() {
        // fetch('../data/galleryData.js')
        //     .then(res => console.log(res))
        //     .then(data => this.setState({data:data}))
        //     .catch(e => console.log(e.message));   
        console.log(this.state.data);    
    }
    render() {        
        return (
            <div>
                <CarouselPic data={this.state.data.obj.carousel}/>
                <Cardrow data={this.state.data.obj.cardData}/>
            </div>
        )
    }       
}