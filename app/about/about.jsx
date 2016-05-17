import React from 'react';
import {Button,Checkbox,DatePicker,Select} from 'antd';

const RangePicker = DatePicker.RangePicker;
const Option = Select.Option;

class About extends React.Component {
    handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    onChangeDate = (value) => {
        console.log('From: ', value[0], ', to: ', value[1]);
    }
    onChange = () => {
        console.log('你点了我一下！');
    }
    render() {
        return (
            <div>
                <header>
                    <Select showSearch
                        style={{ width: 200 }}
                        placeholder="广告系列名称"
                        optionFilterProp="children"
                        notFoundContent="无法找到"
                        onChange={this.handleChange}>
                        <Option value="jack">杰克</Option>
                        <Option value="lucy">露西</Option>
                        <Option value="tom">汤姆</Option>
                    </Select>
                    <RangePicker style={{ width: 184 }} onChange={this.onChangeDate} />
                    <Checkbox defaultChecked={false} onChange={this.onChange}>过滤无数据广告</Checkbox>
                    <Button>查询</Button>
                    <Button type="primary" size="large">新建广告系列</Button>
                </header>
                {this.props.children}
            </div>
        )
  }
}

export default About;