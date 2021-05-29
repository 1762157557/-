import React, { Component } from 'react'
import { Form, Input, Button, message} from 'antd'
import './login.less'
import storageUtils from '../../utils/storageUtils' 
import {reqLogin} from '../../api'



export default class login extends Component {
    render() {

        const layout = {
            labelCol: {
              span: 8,
            },
            wrapperCol: {
              span: 16,
            },
          };
          const tailLayout = {
            wrapperCol: {
              offset: 8,
              span: 16,
            },
          };
          
            const onFinish = async (values) => {
                const {username, password} = values 
                const result = await reqLogin(username, password) 
                console.log('login()', result) 
                if(result.status === 0) 
                    { 
                        // 提示登录成功 
                        message.success('登录成功'); 
                        // 保存用户数据 
                        const user = result.data 
                        storageUtils.saveUser(user) 
                        // 跳转到后台管理路由(已经登录成功，不需要回退了) 
                        this.props.history.replace('/')
                    } 
                else { 
                    // 登录失败, 提示错误 
                        message.error(result.msg) 
                    }            
                };
          
            const onFinishFailed = (errorInfo) => {
              console.log('Failed:', errorInfo);
            };
          
        return (
            <div>
                <header className="login-header"> 
                <h1>React 项目: 后台管理系统</h1>
                </header>
                <div className="form-wrapper-top">
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                    remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    className="form-wrapper"
                >
                    <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your username!',
                        },
                    ]}
                    >
                    <Input />
                    </Form.Item>
            
                    <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                    ]}
                    >
                    <Input.Password />
                    </Form.Item>
            
                    <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    </Form.Item>
          </Form>

                </div>
                
            </div>
            
           
        )
    }
}