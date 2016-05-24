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
  name: '钢铁侠',
  age: 42,
  address: '朝阳区湖底公园1号',
}, {
  key: '2',
  name: '蝙蝠侠',
  age: 33,
  address: '朝阳区湖底公园2号',
}, {
  key: '3',
  name: '蜘蛛侠',
  age: 29,
  address: '朝阳区湖底公园3号',
}];

export {data, columns};
