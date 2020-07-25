import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';

import App from 'App';
import GlobalStyle from 'utils/globalStyle';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
