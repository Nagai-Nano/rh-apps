import React from 'react';
import ReactDOM from 'react-dom';

import 'assets/style.less';
import App from 'App';
import GlobalStyle from 'shared/utils/globalStyle';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
