import React, { Component } from 'react';
import AppBar from './AppBar';
import './css/styles.css';

/**
 * The all-encompassing App.
 */
class App extends Component {
    constructor(props) {
        super(props);
        this.navigate = this.navigate.bind(this);
    }

    navigate(path) {
        this.props.router.push(path);
    }

    render() {
        return (
            <div className="search-component">
                <AppBar navigate={this.navigate}/>
                {this.props.children}
            </div>
        );
    }
}

export default App;
