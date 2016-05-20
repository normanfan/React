import React from 'react';
import { Transfer } from 'antd';

import './message.css';

/*穿梭框组件*/
export default class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            mockData:[],
            targetKeys:[]
        }
    }

    getMock = () => {
        const targetKeys = [];
        const mockData = [];
        for (let i = 0; i < 20; i++) {
          const data = {
            key: i,
            title: `内容${i + 1}`,
            description: `内容${i + 1}的描述`,
            chosen: Math.random() * 2 > 1,
          };
          if (data.chosen) {
            targetKeys.push(data.key);
          }
          mockData.push(data);
        }
        this.setState({ mockData, targetKeys });
    }

    handleChange = (targetKeys) => {
        this.setState({ targetKeys });
    }

    componentDidMount() {
        this.getMock();
    }

    render() {
        return (
            <div id="transfer">
                <Transfer
                    dataSource={this.state.mockData}
                    showSearch
                    listStyle={{
                        width: 250,
                        height: 260
                    }}
                    notFoundContent="找不到相关项"
                    targetKeys={this.state.targetKeys}
                    onChange={this.handleChange}
                    render={item => item.title}
                />
            </div>
        );
    }
}
