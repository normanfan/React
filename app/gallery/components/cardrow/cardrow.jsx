import React from 'react';
import { Card, Col, Row } from 'antd';

import './cardrow.css';

export default class Cardrow extends React.Component {
    constructor(props) {
        super(props);            
    }
        
    render() {        
        return (
            <div id="cardrow">
                <Row gutter={16}>
                    {
                        this.props.data.map((v,i) => {
                            return (
                                <Col span="6" key={i}>
                                    <Card title={v.area} bordered={false}><img src={v.num} /></Card> 
                                </Col>
                            )
                        })
                    }                    
                </Row>
            </div>
        )
    }       
}