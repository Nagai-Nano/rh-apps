import React from 'react';
import { NavLink } from 'react-router-dom';
import { Divider, Menu } from 'antd';

import routes from 'config/routes';
import logo from 'assets/logo.svg';

import { Sider, Logo } from './Styles';

function AppSideMenu() {
  return (
    <Sider>
      <Logo>
        <img src={logo} alt="react-logo" />
        <h2>Rh-apps</h2>
      </Logo>
      <Divider />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['markdown-editor']}
      >
        {routes.map(({ key, title, path, icon }) => (
          <Menu.Item style={{ marginBottom: 10 }} key={key} icon={icon}>
            <NavLink exact to={path}>
              {title}
            </NavLink>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
}

export default AppSideMenu;
