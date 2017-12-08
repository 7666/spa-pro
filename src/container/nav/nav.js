import React from 'react';
import './nav.scss';
import { Menu, Icon, Switch } from 'antd';
import {connect} from 'react-redux';
import * as actions from '../../action/light';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Nav extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  changeTheme = ()=>{
    const dispatch = this.props.dispatch;
    const theme = this.props.theme === 'light' ? 'dark' : 'light';
    console.log(this.props.theme);
    dispatch(actions.getLight(theme));
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        theme= {this.props.theme}
      >
        <Menu.Item key="mail">
          <Icon type="home" />首页
        </Menu.Item>
        <Menu.Item key="app" >
          <Icon type="appstore" />归档
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />分类</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <Icon type="appstore"/>关于
        </Menu.Item>
        <Switch
          checked={this.props.theme === 'dark'}
          onChange={this.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
      </Menu>
    );
  }
}
const mapStateToProps = (state) => ({
    theme: state.light.data
});
export default connect(mapStateToProps)(Nav);
