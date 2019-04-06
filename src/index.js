import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './navbar';
import RecipieApp from './RecipieApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Nav />, document.getElementById('nav'));
ReactDOM.render(<RecipieApp />, document.getElementById('root'));
registerServiceWorker();
