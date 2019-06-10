import React from 'react'
import { Menu, Icon } from 'antd'
import MenuConfig from '../../config/menuConfig.js'
import './index.less'

const SubMenu = Menu.SubMenu

export default class NavLeft extends React.Component {
  componentWillMount() {
    const menuTreeNode = this.readerMenu(MenuConfig)
    console.log(menuTreeNode)
    this.setState({
      menuTreeNode
    })
  }
  // 递归菜单渲染
  readerMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.readerMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item key={item.key}>{item.title}</Menu.Item>
    })
  }
  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>Hello glh</h1>
        </div>
        <Menu theme="dark">{this.state.menuTreeNode}</Menu>
      </div>
    )
  }
}
