/* eslint-env browser */

import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
import './components/style.css';

ReactDOM.render(<App />, document.getElementById('review'));

window.Reviews = App;

