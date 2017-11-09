import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './App';

injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    font-family: _appleSystem, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
    color: #333;
    overflow: hidden;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
