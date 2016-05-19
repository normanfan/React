import React from 'react';
import {Button,Checkbox,DatePicker,Select,Form,Row,Col,Table} from 'antd';

import 'whatwg-fetch';

import {data, columns} from '../data/tableData.jsx';
import './antdes.css';

const FormItem = Form.Item;
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;

class Antdes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selV:['请选择']
        }        
    }
    
    selChange = (value) => {        
        console.log(value);
    }
    dateChange = (value, dateString) => {
        console.log('From: ', value[0], ', to: ', value[1]);
    }
    checkChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }
    componentDidMount() {
        fetch('data/selectData.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data.obj);          
            })
            .catch((ex) => {
                console.log(ex);
            });
    }
    
    render() {
        const rowSelection = {
            //配置项
        };
        return (
            <div id="wrap">
                <div id="header">
                    <Form inline>
                        <Row type="flex" justify="start" gutter={16} align="middle">
                            <Col span="5">
                                <Select onChange={this.selChange} placeholder="请选择广告系列">                                   
                                    <Option value="广告系列一">广告系列一</Option>
                                    <Option value="广告系列二">广告系列二</Option>
                                    <Option value="广告系列三">广告系列三</Option>
                                </Select>
                            </Col>
                            <Col span="5">
                                <FormItem>
                                    <RangePicker onChange={this.dateChange} />
                                </FormItem>
                            </Col>
                            <Col span="3">
                                <FormItem>
                                    <Checkbox defaultChecked={false} onChange={this.checkChange}>过滤无数据广告</Checkbox>
                                </FormItem>
                            </Col>
                            <Col span="2">
                                <FormItem>
                                    <Button>查询</Button>
                                </FormItem>
                            </Col>
                            <Col span="4">
                                <FormItem>
                                    <Button type="primary" size="large">新建广告系列</Button>
                                </FormItem>
                            </Col>

                        </Row>
                    </Form>
                    {this.props.children}
                </div>
                <div id="table">
                    <Table rowSelection={rowSelection} dataSource={data} columns={columns} />                    
                </div>
            </div>
        )
  }
}

export default Antdes;