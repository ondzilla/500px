import React, { Component } from 'react';
import './css/styles.css';
import SearchBar from './SearchBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../lib/500px.js';


class SearchComponent extends Component {
    render() {
        return (
            <div className="search-component">
                <AppBar
                    title="500px Search"
                    showMenuIconButton={false}
                    iconElementRight={<SearchBar onSubmit={this.props.navigate} />}
                />
                {this.props.children}
            </div>
        );
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        injectTapEventPlugin();
        this.navigate = this.navigate.bind(this);

        window._500px.init({
            sdk_key: '26aa2230f2ef55c070ef4efe62fab4c97fc305be'
        });
    }

    navigate(path) {
        this.props.router.push(path);
    }

    render() {
        return (
            <MuiThemeProvider>
                <SearchComponent navigate={this.navigate} children={this.props.children} />
            </MuiThemeProvider>
        );
    }
}

export default App;
