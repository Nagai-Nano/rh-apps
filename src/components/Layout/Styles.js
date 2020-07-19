import styled from 'styled-components';
import { Layout, Menu as AntdMenu } from 'antd';

export const Sider = styled(Layout.Sider)`
  background: #141414;
  overflow: auto;
  position: fixed;
  left: 0;
  height: 100vh;
  padding: 12px;
`;

export const Header = styled(Layout.Header)`
  text-align: right;
  background: #141414;
`;

export const Content = styled(Layout.Content)`
  padding: 1rem;
  background: #1f1f1f;
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
  }
`;

export const Menu = styled(AntdMenu)`
  background: transparent !important;

  li {
    padding: 0 10px !important;
  }
`;
