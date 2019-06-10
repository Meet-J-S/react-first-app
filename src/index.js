import React from 'react';
import ReactDOM from 'react-dom';
import Main from './router/main';
import * as serviceWorker from './serviceWorker';
import store from './store'

ReactDOM.render(<Main store={store}/>, document.getElementById('m-root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
