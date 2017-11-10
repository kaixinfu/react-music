import React, {
  Component,
  PropTypes
} from 'react'
import {Link} from 'react-router'
import styles from './Sidebar.scss'
import {Menu, Icon} from 'antd'
// import {Icon} from '../../components/Commons'
import classNames from 'classnames'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class Sidebar extends Component {
  renderNextMenus(item) {
    const {children} = item
    return children.map(item => {
      return (
        <Menu.Item  className='menu-main' style={{fontSize: 14}} key={item.title}>
          <Link to={item.to}>{item.title}</Link>
        </Menu.Item>
      )
    })
  }
  renderMenus(index) {
    const items = this.props.sidebar.menus[index].children
    return items.map((item, idx) => {
      if (!item.children) {
        return (
          <Menu.Item style={{fontSize: 14}} key={item.title}>
            <Link to={item.to}><Icon className='m-r-xs menu-main' size={14} type={item.icon} />{item.title}</Link>
          </Menu.Item>
        )
      }
      return (
        <SubMenu title={<span><Icon className='m-r-xs mmenu-child' size={14} type={item.icon} /><span style={{fontSize: 14}}>{item.title}</span></span>} key={item.title}>
          {this.renderNextMenus(item)}
        </SubMenu>
      )
    })
  }
  renderCategories() {
    const items = this.props.sidebar.menus
    return items.map((item, idx) => {
      return (
        <MenuItemGroup key={item._key}>
          {this.renderMenus(idx)}
        </MenuItemGroup>
      )
    })
  }
  render() {
    const {sidebarCollapse} = this.props.settings
    const {user} = this.props.authed
    return (
      <div className={classNames(styles.sidebarWrap, {[styles.sidebarCollapse]: sidebarCollapse})}>
        <div className={styles.collapseOn} onClick={() => this.props.sidebarCollapseChange(false)}>
          <Icon name='angle-right' size={28} />
        </div>
        <a className={styles.logo} href='/'>
          <span className={styles.bg}>
            <img src='/images/logo-2.png' />
          </span>
        </a>
        <Menu
          mode='inline'
          className={styles.menu}>
          {this.renderCategories()}
          {/* {user.roles_permissions && user.roles_permissions.Track && <Menu.Item key='Track' style={{fontSize: 14, background: '#1e2432'}}>
            <a href='http://www.topdmc.cn/signin' target="_blank"><i className='fa fa-music menu-main' style={{marginRight: 10}} />曲库管理</a>
          </Menu.Item>} */}
        </Menu>
        <div className={styles.collapseOff} onClick={() => this.props.sidebarCollapseChange(true)}>
          <div className={styles.offBtn} />
        </div>
      </div>
    )
  }
}

Sidebar.propTypes = {
  sidebar: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  sidebarCollapseChange: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  authed: PropTypes.object.isRequired
}

export default Sidebar
