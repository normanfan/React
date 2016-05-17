import React from 'react';
import {Form,Input,Button,Row,Col} from 'antd';
const FormItem = Form.Item;

/*output组件*/
class Output extends React.Component {
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
                    <Row>
                        <Col span="5">
                            <FormItem label="Input：">
                                <Input onChange={this.changeV} value={this.state.v} onFocus={this.focusMe}/>
                            </FormItem>
                        </Col>                      
                        <Col span="5">
                            <FormItem label="Output：">
                                <Input value={this.state.v} disabled/>
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

export default Output;
