import React, { Component } from 'react';
import SearchResult from './SearchResult';
import {deepOrange800} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import _500px from '../lib/500px.js';
import './css/styles.css';
import data from '../data/delsbo.json';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';

const muiTheme = getMuiTheme({
    palette: {

        accent1Color: deepOrange800
    }
});

class SearchComponent extends Component {
    render() {

        /*var _500px = window._500px;
         _500px.init({
         sdk_key: '26aa2230f2ef55c070ef4efe62fab4c97fc305be'
         });

         _500px.api("/photos/search", {term: 'Delsbo'}, function(response) {
         console.log("response: ", response);
         });*/

        return (
            <div className="search-component">
                <AppBar
                    title="500px Search"
                    showMenuIconButton={false}
                    iconElementRight={<IconButton><SearchIcon /></IconButton>}
                    onRightIconButtonTouchTap={function(event) {
                        console.log("tapped right icon");
                    }}
                />
                <SearchResult data={data}/>
            </div>
        );
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        injectTapEventPlugin();
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <SearchComponent data={data}/>
            </MuiThemeProvider>
        );
    }
}

export default App;
