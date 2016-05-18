import React from 'react';
import {Button,Checkbox,DatePicker,Select,Form,Row,Col,Table} from 'antd';

import 'whatwg-fetch';

import {data, columns} from './tableData.jsx';
import './about.css';

const FormItem = Form.Item;
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;

class About extends React.Component {
    handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    onChangeDate = (value, dateString) => {
        console.log('From: ', value[0], ', to: ', value[1]);
    }
    onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }
    componentDidMount() {
        fetch('json/selectData.json')
            .then(function(response) {
                return response.json()
              }).then(function(json) {
                console.log(json)
              }).catch(function(ex) {
                console.log(ex)
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
                                <Select showSearch
                                    placeholder="广告系列名称"
                                    optionFilterProp="children"
                                    notFoundContent="无法找到"
                                    onChange={this.handleChange}>
                                    <Option value="jack">杰克</Option>
                                    <Option value="lucy">露西</Option>
                                    <Option value="tom">汤姆</Option>
                                </Select>
                            </Col>
                            <Col span="5">
                                <FormItem>
                                    <RangePicker onChange={this.onChangeDate} />
                                </FormItem>
                            </Col>
                            <Col span="3">
                                <FormItem>
                                    <Checkbox defaultChecked={false} onChange={this.onChange}>过滤无数据广告</Checkbox>
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

export default About;