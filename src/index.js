import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import pages from './assets/pages';
import PagesActions from './flux/actions/pages';
import App from './components/pages';
import './reset.css';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

pages.list.forEach((page) => {
  PagesActions.add(page)
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
