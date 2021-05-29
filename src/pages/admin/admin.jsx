import React, { Component } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import storageUtils from '../../utils/storageUtils' /*后台管理的路由组件 */
import { Layout } from 'antd'
import LeftNav from '../../components/left-nav'
import Home from '../home/home' 
import Category from '../category/category' 
import Role from '../role/role'
import List from '../list/list' 
import Product from '../product/product' 
import Header from '../../components/header'


const { Footer, Sider, Content } = Layout



export default class Admin extends Component {
    render() {
        const user = storageUtils.getUser()
        if (!user._id) 
        { 
            return <Redirect to='/login' /> 
        }

        return (
                <div style={{ height:'100%' }}>
                    <Layout style={{ height:'100%' }}>
                        <Sider > 
                            <LeftNav/> 
                        </Sider>


                        <Layout  >
                            <Header>Header</Header>
                            <Content style={{backgroundColor: '#fff', margin:'20px'}}>
                                <Switch>
                                    <Redirect from='/' exact to='/home'/>
                                    <Route path='/home' component={Home}/>
                                    <Route path='/category' component={Category}/>
                                    <Route path='/product' component={Product}/>
                                    <Route path='/role' component={Role}/>
                                    <Route path='/list' component={List}/>
                                </Switch>
                            </Content>
                             <Footer style={{textAlign: 'center', color: '#aaaaaa'}}>
                                 推荐使用谷歌浏览器， 可以获得更佳页面操作体验
                            </Footer>
                        </Layout>

                    </Layout>
                    
                </div>
            )
    }
}