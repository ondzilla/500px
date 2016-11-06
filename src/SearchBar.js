import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';

const style = {
    margin: 0
};

class SearchBar extends Component {


    render() {
        return (
            <div>
                <TextField
                    style={style}
                />
                <IconButton
                    label="Search"
                    style={style}
                ><SearchIcon /></IconButton>
            </div>
        )
    }
}

export default SearchBar;