import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MenuBar from './MenuBar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MenuBar />, document.getElementById('root'));
registerServiceWorker();
