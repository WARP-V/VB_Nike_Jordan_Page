import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

require('./style.css');

ReactDom.render(<App />, document.getElementById('sizing'));

window.SizesAndCart = App;
