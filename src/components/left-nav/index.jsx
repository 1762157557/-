import React, { Component } from 'react'
import "./index.less"
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'

import menuConfig from '../../config/menuConfig'
import './index.less'

const SubMenu = Menu.SubMenu


class LeftNav extends Component {
    getMenuNodes(menuList) {
        const path = this.props.location.pathname
        return menuList.reduce((pre, item) => {
            if (!item.children) {
                pre.push((
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
                )
            }
            else {

                pre.push((
                    <SubMenu key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>}
                    >
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                )
                )
                if (item.children.find(cItem => path.indexOf(cItem.key) === 0)) {
                    this.openKey = item.key
                }
            }
           
            return pre
        }, [])
    }
    componentWillMount() {
        this.menuNodes = this.getMenuNodes(menuConfig)
    }
    render() {
        const selectKey = this.props.location.pathname
        return (
            <div className="left-nav">
                <Link to='/home' className='logo-link'>
                    {/* <img src={logo} alt="logo"/> */}
                    <h1>Game Start</h1>
                </Link>
                <Menu 
                    mode="inline" 
                    theme="dark" 
                    selectedKeys={[selectKey]} 
                    defaultOpenKeys={[this.openKey]} > 
                    { this.menuNodes } 
                </Menu>
            </div>
        )
    }
}


export default withRouter(LeftNav)