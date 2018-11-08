import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './components/Toolbar';

require('./style.css');

window.Navigation = Toolbar;

ReactDOM.render(<Toolbar />, document.getElementById('search'));
