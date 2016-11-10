import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import App from './App';
import Home from './Home';
import Search from './Search';
import './css/index.css';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>

            <IndexRoute component={Home}/>

            <Route path="/search/:term" component={Search} />

        </Route>
    </Router>,
    document.getElementById('root')
);
