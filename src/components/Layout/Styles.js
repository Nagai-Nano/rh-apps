import styled from 'styled-components';
import { Layout, Menu as AntdMenu } from 'antd';

export const Sider = styled(Layout.Sider)`
  overflow: auto;
  position: fixed;
  left: 0;
  height: 100vh;
  padding: 12px;
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
`;

export const Header = styled(Layout.Header)`
  text-align: right;
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
`;

export const Content = styled(Layout.Content)`
  padding: 1rem;
  background: #fff;
  margin: 2rem;
  border-radius: 2px;
  box-shadow: 0 0 12px #f0f1f2;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 60px;
    margin-left: 7px;
  }

  h2 {
    margin: 0;
    padding-top: 3px;
    font-weight: 700;
  }
`;

export const Menu = styled(AntdMenu)`
  background: transparent !important;
  border-right: none;

  li {
    padding: 0 10px !important;
  }
`;
