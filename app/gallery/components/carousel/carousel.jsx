import React from 'react';
import { Carousel } from 'antd';
import './carousel.css';

/*轮播图组件*/
export default class CarouselPic extends React.Component {
    constructor(props) {
        super(props);    
    }
    render() {
        return (
            <div id="carouselPic">                
                <Carousel autoplay vertical="true" dots="false">
                    {
                        this.props.data.map((v,i) => {
                            return <div key={i}><h3>{v}</h3></div>
                        })
                    }                    
                </Carousel>
            </div>
        )
    }       
}