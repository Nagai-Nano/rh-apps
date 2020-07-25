import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Layout, Spin } from 'antd';

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
            <Suspense fallback={<Spin className="spin-center" />}>
              <Switch>
                {routes.map(({ key, path, Component }) => (
                  <Route exact key={key} path={path} component={Component} />
                ))}
                <Route render={() => <Redirect to="/markdown-editor" />} />
              </Switch>
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
