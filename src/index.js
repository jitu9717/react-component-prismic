import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MenuBar from './MenuBar';
import Carousel from './Carousel';
import FollowYourHead from './FollowYourHead';
import FollowYourHeart from './FollowYourHeart';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Carousel />, document.getElementById('root'));
registerServiceWorker();
