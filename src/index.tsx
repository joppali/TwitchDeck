import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TwitchDeck from './components/pages/TwitchDeck';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TwitchDeck />, document.getElementById('root'));

// If you want your App to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
