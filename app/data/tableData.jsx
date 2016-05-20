import React from 'react';
import {Icon} from 'antd';

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  render: 
    text => (
        <span><a href="#">{text}&nbsp;&nbsp;</a><Icon type="edit" /></span>
    ),
}, {
  title: '年龄',
  dataIndex: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
}];
const data = [{
  key: '1',
  name: '张三',
  age: 52,
  address: '朝阳区湖底公园1号',
}, {
  key: '2',
  name: '李四',
  age: 33,
  address: '朝阳区湖底公园2号',
}, {
  key: '3',
  name: '王五',
  age: 29,
  address: '朝阳区湖底公园3号',
}];

export {data, columns};
