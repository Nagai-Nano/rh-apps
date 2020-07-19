import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Divider } from 'antd';

import routes from 'config/routes';
import logo from 'assets/logo.svg';

import { Sider, Logo, Menu } from './Styles';

function AppSideMenu() {
  const { pathname } = useLocation();

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
        defaultSelectedKeys={[pathname.slice(1)]}
      >
        {routes.map(({ key, title, path, icon }) => (
          <Menu.Item key={key} icon={icon}>
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
