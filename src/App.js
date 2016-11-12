import React, { Component } from 'react';
import './css/styles.css';
import AppBar from './AppBar';
import '../lib/500px.js';
import data from '../data/delsbo.json';

class App extends Component {
    constructor(props) {
        super(props);
        this.navigate = this.navigate.bind(this);
    }

    navigate(path) {
        this.props.router.push(path);
    }

    render() {
        console.log("App#render - data: ", data);
        return (
            <div className="search-component">
                <AppBar onSubmit={this.navigate}/>
                {this.props.children}
            </div>
        );
    }
}

export default App;
