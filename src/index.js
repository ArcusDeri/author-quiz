import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const render = () => ReactDOM.render(<App />, document.getElementById('root'));

render();
serviceWorker.unregister();
