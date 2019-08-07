import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import NewYorkTimesCrossword from './components/crossword/NewYorkTimesCrossword';
import App from './App';
import MainContainer from './components/mainContainer/MainContainer';

ReactDOM.render(
  <Router>
    <div>
      <aside>
        <Link to={`/`}>Dashboard</Link>
        <Link to={`/about`}>About</Link>
      </aside>

      <MainContainer>
        <Route exact path="/" component={App} />
        <Route path="/:year/:month/:day" component={NewYorkTimesCrossword} />
      </MainContainer>
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
