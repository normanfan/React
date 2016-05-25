import React from 'react';
import {Form,Input,Button,Row,Col} from 'antd';

const FormItem = Form.Item;

/*output组件*/
export default class Output extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            v: ''
        }
    }
    changeV = (e) => {
        this.setState({v:e.target.value });
    }
    focusMe = () => {
        this.setState({v: ''});
    }
    render() {
        return (
            <div id="output">
                <Form inline >
                    <Row type="flex" justify="start" align="middle">
                        <Col span="10">                            
                            <Input addonBefore="Input：" onChange={this.changeV} value={this.state.v} onFocus={this.focusMe}/>                            
                        </Col>                      
                        <Col span="10" push="1">                            
                            <Input addonBefore="Output：" value={this.state.v} disabled/>                            
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

