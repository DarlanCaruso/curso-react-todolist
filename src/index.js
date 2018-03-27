import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bulma/css/bulma.css';
import './fontawesome-all.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
