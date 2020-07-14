import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import routes from 'config/routes';
import { Header, SideMenu, Content } from 'components';

function App() {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <SideMenu />
        <Layout style={{ marginLeft: 200 }}>
          <Header />
          <Content>
            <Switch>
              {routes.map(({ key, path, Component }) => (
                <Route exact key={key} path={path} component={Component} />
              ))}
              <Route render={() => <Redirect to="/markdown-editor" />} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
