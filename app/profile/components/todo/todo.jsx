import React from 'react';
import {Form,Input,Button} from 'antd';
const FormItem = Form.Item;

/*TODO组件*/
class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ol>
                {
                    this.props.items.map((v,i) => {
                        return <li key={i}>{v}</li>
                    })
                }
            </ol>
        )
    }
}

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num:1,
            items: [],
            valueText:''
        };
    }

    valueChange = (e) => {
        this.setState({valueText: e.target.value});  //捕获当前事件对象目标中的值，插入到valueText
    }

    addItem = (e) => {
        e.preventDefault();
        var newItems = this.state.items.concat(this.state.valueText);  //注意返回值，需要返回新数组
        this.setState({ 
            num: this.state.num + 1, 
            items: newItems,
            valueText: ''
        });
    }

    render() {             
        return (
            <div id="todo">
                 <Form inline >
                    <FormItem label="TODO APP：">
                        <Input type="text" value={this.state.valueText} onChange={this.valueChange} placeholder="i am going to do"/>
                    </FormItem>
                    <Button onClick={this.addItem} type="primary" >{'# '+this.state.num}</Button>                           
                </Form>
                <List items={this.state.items} />
            </div>
        )
    }
}