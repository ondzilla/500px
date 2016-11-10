import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();

        var path = "/search/" + this.refs.searchTermInput.input.value;
        this.props.onSubmit(path);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField
                    id="q"
                    name="q"
                    hintText="Search"
                    ref="searchTermInput"
                />
                <IconButton
                    label="Search"
                    type="submit"
                ><SearchIcon /></IconButton>
            </form>
        )
    }
}

export default SearchBar;