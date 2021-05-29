import React, { Component } from 'react'
import { Input, Button, Tag, Card } from 'antd';
import "./list.less"
export default class list extends Component {
    render() {
        return (
            <div className="root-div" style={{height:"100%"}}>
                <div>
                <Card  style={{height:"245px"}}>
                    <div className="header">

                        <h1>基本设置</h1>
                        <p>中台商品</p>
                        <p>中台商品中台商品中台商品中台商品</p>
                        <p>Ones空间:</p>
                        <div className="input-wrapper">
                            <Input placeholder="请输入ones空间地址" />
                            <Button >添加</Button>
                        </div>
                        <div className="Tag-wrapper">
                            <Tag
                                closable
                                color="processing"
                            >
                                【赋能产品】蔬果派
                            </Tag>
                            <Tag
                                closable
                                color="processing"

                            >
                                【赋能产品】百川中台
                            </Tag>
                        </div>
                    </div>
                </Card>
                </div>
              

                <div>
                <Card bordered={false}>
                    <div className="foot">
                    <h1>AppKeys</h1>
                    <div className="input-wrapper">
                            <Input placeholder="请输入ones空间地址" />
                            <Button >添加</Button>
                    </div>
                    </div>
                </Card>

                </div>
            </div>
        )
    }
}
