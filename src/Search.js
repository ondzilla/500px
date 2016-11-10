import React, { Component } from 'react';
import '../lib/500px.js';
import SearchResult from './SearchResult';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {}
        };

    }

    componentWillReceiveProps(props) {
        var thus = this;
        window._500px.api("/photos/search", {term: props.params.term}, function(response) {
            if (response.success) {
                thus.setState({
                    data: response.data
                });
            }
        });
    }

    render() {
        return (
            <SearchResult data={this.state.data} />
        )
    }
}

export default Search;